from flask import Flask, jsonify, request
from flask_cors import CORS


# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app)


# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


@app.route("/dates", methods=['POST', 'DELETE'])
def post_dates():
    if request.method == "POST":
        data = request.get_json()
        min_date = data['minDate']
        max_date = data['maxDate']
        print(data)
        return jsonify(data)


@app.route("/player", methods=['POST'])
def post_player():
    if request.method == "POST":
        data = request.get_json()
        print(data['selected'])
        return jsonify(data)


if __name__ == '__main__':
    app.run()
