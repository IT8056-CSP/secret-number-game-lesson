from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def hello():
    return {'message': 'This is a response from the server 😀😃😄😁😆😅😂🤣'}, 200

secret_number = 50

@app.route('/guess/<attempt>', methods=['POST'])
def check_attempt(attempt):
    print("Attempt: {}".format(attempt))
    message = "CORRECT!"
    if int(attempt) < secret_number:
        message = "HIGHER!"
    elif int(attempt) > secret_number:
        message = "LOWER!"

    return { 'message': message }, 201

@app.errorhandler(404)
def not_found(e):
    return {'error': 'Resource {} {} Not Found!'.format(request.method, request.url)}, 404


if __name__ == "__main__":
    app.run(debug=True, port=8000)
