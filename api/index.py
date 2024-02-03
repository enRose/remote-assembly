import json
from flask import Flask
app = Flask(__name__)

@app.route("/api/hello", methods=['POST'])
def hello_world():
    return "Hello, Yini!"

@app.route("/api/messages", methods=['GET'])
def messages():
    
    m = {
        'usr': 'Hello ai',
        'bot': 'Hello Yini'
    }

    return json.dumps(m)