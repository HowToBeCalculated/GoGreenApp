from datetime import datetime
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__) # initialize flask app
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///C:\\SQLite\\gogreen.db"
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'USERS' # primary key username

    username = db.Column(db.String(80), unique=True, nullable=False, primary_key=True)
    password = db.Column(db.String(80), nullable=False)

class History(db.Model):
    __tablename__ = 'HISTORY' #primary key username, activity date, subcategory

    history_id = db.Column(db.String(256), primary_key=True, nullable=False)
    username = db.Column(db.String(80), db.ForeignKey('USERS.username'), nullable=False)
    activity_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    category = db.Column(db.String(256), nullable=False)
    subcategory = db.Column(db.String(256), nullable=False)
    category = db.Column(db.String(256), nullable=False)
    param_name = db.Column(db.String(256))
    param_value = db.Column(db.Float(precision=6), nullable=False)
    emission = db.Column(db.Float(precision=6), nullable=False)

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
    username = request.args.get('username')
    password = request.args.get('password')
    print(username, password)
    if not username or not password:
        return jsonify({"msg": "Missing username or password"}), 400
    user = User.query.filter_by(username=username).first()
    if not user or user.password != password:
        return jsonify({"msg": "Invalid username or password"}), 401
    return jsonify({"msg": "Logged in successfully", "success": "true"}), 200

@app.route('/newactivity', methods=['POST'])
def add_activity(): 
    print('made it into the add activity function.')
    # collect the input from API request
    username = request.json.get('username')
    #history_id = request.json.get('id')
    date = request.json.get('date')
    date_format = '%Y-%m-%d'
    activity_date = datetime.strptime(date, date_format)
    category = request.json.get('category')
    subcategory = request.json.get('subcategory')
    param_name = request.json.get('parameter')
    param_value = request.json.get('parameter_value')
    history_id = username + str(subcategory) + date
    print('history_id: ', history_id)
    #emission = request.json.get('emission') # should be calculated in the route here?
    emission = 100 # test data before implementing API call
    # make API call to Climatiq to get the calculation (GET)
    print()


    # make sure there is not already an entry for this username, subcategory and activity date
    exists = History.query.filter_by(username=username, history_id=history_id, activity_date=activity_date, subcategory=subcategory).first()
    if exists: 
        return jsonify({"msg": "An entry for this username, date and subcategory combindation already exists."}), 400
    # make sure can only access the page if user is not null
    # in this case no need to double check user information 
    # post new information to the DB
    entry = History(username=username, activity_date=activity_date,
            category=category, subcategory=subcategory, param_name=param_name, param_value=param_value,
            emission=emission)                  
    db.session.add(entry)
    db.session.commit()
    return jsonify({"msg": "Actvity Entry created successfully", "success": "true"}), 201

# retrieve all activities for a user and their total footprint
@app.route('/allactivities', methods=['GET'])
def get_activities_user():
    print(request.args)
    username = request.args.get('username')
    all_activties = History.query.filter_by(username=username).all()
    if not all_activties:
        return jsonify({"msg": "Currently no activities available for this user", "success": "false"}), 404
    all_activities_json = [{'username': activity.username, 'activity_date': activity.activity_date,
                             'category': activity.category, 'subcategory': activity.subcategory, 
                             'param_name': activity.param_name, 'param_value': activity.param_value, 
                             'emission':activity.emission, 'history_id': activity.history_id } for activity in all_activties]
    return jsonify({"msg": "All activities of current user", "success": "true", "content" : all_activities_json}), 201

if __name__ == '__main__':
    app.run(debug=True)
    