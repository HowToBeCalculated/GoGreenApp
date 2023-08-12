from flask import Flask, request, jsonify
from flask_cors import CORS
from typing import List, Optional

from db_tables import (
    db,
    User,
    Group,
    Membership,
    Activity,
    Goals,
    History,
)

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///gogreen.db"

    db.init_app(app)

    return app

app = create_app()
CORS(app)

def serialize(model: db.Model, keys: Optional[List[str]] = None):
    """Transforms a model into a dictionary which can be dumped to JSON."""
    if keys:
        return {key: getattr(model, key) for key in keys}

    # otherwise return all
    return dict(filter(lambda x: not x[0].startswith('_'), model.__dict__.items()))


@app.route('/signup', methods=['GET'])
def debug_get_all_signups():
    all_users = User.query.all()
    all_users_json = [{'id': user.id, 'username': user.username, 'password': user.password} for user in all_users]
    return jsonify(all_users_json), 200

# to differentiate from get request
@app.route('/createuser', methods=['POST'])
def signup():
    print('made it into the create user function.')
    #if not request.is_json:
    #    return jsonify({"msg": "Missing JSON in request"}), 400
    print(request.get_json())
    username = request.json.get('username')
    password = request.json.get('password')

    if not username or not password:
        return jsonify({"msg": "Missing username or password"}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({"msg": "Username already exists"}), 400

    user = User(username=username, password=password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "User created successfully", "success": "true"}), 201


@app.route('/login', methods=['GET'])
def login():
    print(request.args)
    username = request.args.get('username')
    password = request.args.get('password')
    print(username, password)
    if not username or not password:
        return jsonify({"msg": "Missing username or password"}), 400
    user = User.query.filter_by(username=username).first()
    print('found user!', user)
    if not user or user.password != password:
        return jsonify({"msg": "Invalid username or password"}), 401
    return jsonify({"msg": "Logged in successfully", "success": "true"}), 200


if __name__ == '__main__':
    app.run(debug=True)
