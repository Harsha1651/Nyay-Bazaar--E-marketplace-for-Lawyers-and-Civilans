from flask import Flask, request, jsonify
from g4f.client import Client

app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    input_text = data['input']

    client = Client()
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": input_text}],
    )

    return jsonify({'output': response.choices[0].message.content})

if __name__ == '__main__':
    app.run(port=6000)