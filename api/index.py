import json
import os
import sys
from flask import Flask, request
from dotenv import load_dotenv
import chromadb
from chromadb.utils.embedding_functions import OpenAIEmbeddingFunction
import warnings
import numpy as np


load_dotenv()

app = Flask(__name__)

warnings.filterwarnings(action="ignore", 
                        message="unclosed", 
                        category=ResourceWarning)
warnings.filterwarnings("ignore", category=DeprecationWarning)

EMBEDDING_MODEL = "text-embedding-3-small"

embedding_function = OpenAIEmbeddingFunction(
    api_key=os.environ.get('OPENAI_API_KEY'), 
    model_name=EMBEDDING_MODEL)

chroma_client = chromadb.PersistentClient()

chat_history_collection = chroma_client.get_or_create_collection(
    name='chat_history')

rng = np.random.default_rng()

@app.route("/api/ask", methods=['POST'])  
def ask():
    id = rng.random()
    q = {"role":"user","content":request.data.decode('UTF-8')}

    chat_history_collection.add(
    documents=[json.dumps(q)],
    ids=[f'{id}'])

    print(q, file=sys.stderr)

    return f'You asked: {request.data}'

@app.route("/api/history", methods=['POST'])
def chat():

    history = chat_history_collection.get()

    print(json.dumps(history), file=sys.stderr)

    return json.dumps(history)