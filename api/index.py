import json
import sys
from flask import Flask, request
import os
import getpass

app = Flask(__name__)

# os.environ['OPENAI_API_KEY'] = getpass.getpass('OpenAI API Key:')

@app.route("/api/ask", methods=['POST'])
def ask():
    print(request.data, file=sys.stderr)
    return "Hello, Yini!"

@app.route("/api/chat", methods=['GET'])
def chat():
    
    chat = {"messages":[
        {"role":"user","content":"sdfsdfsd"},
        {"role":"assistant","content":"I'm sorry, but I don't understand what you're trying to say. Can you please provide more information or rephrase your question?"},
        {"role":"user","content":"gdgdgdfgdg"}],
        "id":"lLQ1OeL"}

    return json.dumps(chat)