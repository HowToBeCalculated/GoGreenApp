from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__) # initialize flask app
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///C:\\SQLite\\users.db"
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

with app.app_context():
    db.create_all()


@app.route('/signup', methods=['GET'])
def debug_get_all_signups():
    all_users = User.query.all()
    all_users_json = [{'id': user.id, 'username': user.username, 'password': user.password} for user in all_users]
    return jsonify(all_users_json), 200

# to differentiate from get request
@app.route('/createuser', methods=['POST'])
def signup():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400
    
    username = request.json.get('username')
    password = request.json.get('password')
    
    if not username or not password:
        return jsonify({"msg": "Missing username or password"}), 400
    
    if User.query.filter_by(username=username).first():
        return jsonify({"msg": "Username already exists"}), 400
    
    user = User(username=username, password=password)
    db.session.add(user)
    db.session.commit()
    
    return jsonify({"msg": "User created successfully"}), 201


@app.route('/login', methods=['GET'])
def login():
    print(request.args)
    username = request.args.get('username')
    password = request.args.get('password')
    print(username, password)
    if not username or not password:
        return jsonify({"msg": "Missing username or password"}), 400
    user = User.query.filter_by(username=username).first()
    if not user or user.password != password:
        return jsonify({"msg": "Invalid username or password"}), 401
    return jsonify({"msg": "Logged in successfully"}), 200


if __name__ == '__main__':
    app.run(debug=True)