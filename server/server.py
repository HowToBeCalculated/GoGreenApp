from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from typing import List, Optional

from db_tables import (
    db,
    User,
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

@app.route('/signup', methods=['GET'])
def debug_get_all_signups():
    all_users = User.query.all()
    all_users_json = [{'id': user.id, 'username': user.username, 'password': user.password} for user in all_users]
    return jsonify(all_users_json), 200

# to differentiate from get request
@app.route('/createuser', methods=['POST'])
def signup():
    username = request.json.get('username')
    password = request.json.get('password')
    fullname = request.json.get('fullname')
    print('received', username, password, fullname)

    if not username or not password:
        return jsonify({"msg": "Missing username or password"}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({"msg": "Username already exists"}), 400

    user = User(username=username, password=password, fullname=fullname)
    db.session.add(user)
    db.session.commit()

    # record activity in Acitvity DB
    points = 10
    activity_logged = "log_in_created"
    timestamp = datetime.now()
    activity_log = Activity(username=username, activity_date = timestamp, activity=activity_logged, points=points)
    db.session.add(activity_log)
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

    # record activity in Acitvity DB
    points = 10
    activity_logged = "logged_in"
    timestamp = datetime.now()
    activity_log = Activity(username=username, activity_date = timestamp, activity=activity_logged, points=points)
    db.session.add(activity_log)
    db.session.commit()

    return jsonify({"msg": "Logged in successfully", "success": "true"}), 200

@app.route('/newactivity', methods=['POST'])
def add_activity():
    print('made it into the add activity function.')
    # collect the input from API request
    username = request.json.get('username')
    date = request.json.get('date')
    date_format = '%Y-%m-%d'
    activity_date = datetime.strptime(date, date_format)
    category = request.json.get('category')
    subcategory = request.json.get('subcategory')
    param_name = request.json.get('parameter')
    param_value = request.json.get('parameter_value')
    emission = request.json.get('emission')

    print('emission received is: ', emission)

    # make sure can only access the page if user is not null
    # in this case no need to double check user information
    # post new information to the DB
    entry = History(username=username, activity_date=activity_date,
            category=category, subcategory=subcategory, param_name=param_name, param_value=param_value,
            emission=emission)
    db.session.add(entry)
    db.session.commit()

    # record activity in Acitvity DB
    points = 20
    activity_logged = "new_activity_added"
    timestamp = datetime.now()
    activity_log = Activity(username=username, activity_date = timestamp, activity=activity_logged, points=points)
    db.session.add(activity_log)
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
                             'emission': round(activity.emission,2), 'history_id': activity.history_id } for activity in all_activties]

    # get the total emissions and breakdown for the main 4 categories
    transport_total, household_total, food_total, personal_care_total = 0,0,0,0
    for activity in all_activties:
        if activity.category == 'Transport':
            transport_total += activity.emission
        elif activity.category == 'Household':
            household_total += activity.emission
        elif activity.category == 'Food':
            food_total += activity.emission
        elif activity.category == 'Personal Care':
            personal_care_total += activity.emission
    total = round(transport_total + household_total + food_total + personal_care_total,2)

    return jsonify({"msg": "All activities of current user", "success": "true",
                    "content" : all_activities_json, "total": total,
                    "breakdown" : [
                        {"name" : "Transport", "value" : round(transport_total,2)},
                        {"name": "Household", "value" : round(household_total,2)},
                        {"name": "Food", "value" : round(food_total,2)},
                        {"name": "Personal Care", "value" : round(personal_care_total,2)}]}), 200

# routes for set goals page
@app.route('/newgoal', methods=['POST'])
def add_goal():
    print('made it into the add goal function.')
    # collect the input from API request
    username = request.json.get('username')
    category = request.json.get('category')
    subcategory = request.json.get('subcategory')
    param_name = request.json.get('parameter')
    param_value = request.json.get('parameter_value')
    emission = request.json.get('emission')

    print("we are adding: ", username, category, subcategory, param_name, param_value, emission)

    # check if we already have a value for the subcategory
    goal = Goals.query.filter_by(username=username, subcategory=subcategory).first()

    # if goal is none we add new entry to the DB
    if not goal:
        # post new information to the DB
        entry = Goals(username=username, category=category, subcategory=subcategory,
                      param_name=param_name, param_value=param_value, emission=emission)
        db.session.add(entry)
        db.session.commit()
    #otherwise we only update the target value
    else:
        goal.param_name = param_name
        goal.param_value = param_value
        goal.emission = emission
        db.session.commit()

    # record activity in Acitvity DB
    points = 20
    activity_logged = "new_goal_added"
    timestamp = datetime.now()
    activity_log = Activity(username=username, activity_date = timestamp, activity=activity_logged, points=points)
    db.session.add(activity_log)
    db.session.commit()

    return jsonify({"msg": "Goal Entry created successfully", "success": "true"}), 201

# retrieve all activities for a user and their total footprint
@app.route('/allgoals', methods=['GET'])
def get_goals_user():
    username = request.args.get('username')
    month = int(request.args.get('month'))
    year = int(request.args.get('year'))
    prev_month, prev_year = get_prev_month_year(month, year)
    # needed to show timeseries of the last 6 months
    prev_month_2, prev_year_2 = get_prev_month_year(prev_month, prev_year) # 2
    prev_month_3, prev_year_3 = get_prev_month_year(prev_month_2, prev_year_2) # 3
    prev_month_4, prev_year_4 = get_prev_month_year(prev_month_3, prev_year_3) # 4
    prev_month_5, prev_year_5 = get_prev_month_year(prev_month_4, prev_year_4) # 5
    prev_month_6, prev_year_6 = get_prev_month_year(prev_month_5, prev_year_5) # 6

    # return list of all goals
    all_goals= Goals.query.filter_by(username=username).all()
    if not all_goals:
        all_goals_json = []
    else:
        all_goals_json = [{'username': goal.username, 'category': goal.category, 'subcategory': goal.subcategory,
                        'param_name': goal.param_name, 'param_value': goal.param_value, 'emission': round(goal.emission,2),
                        'goal_id': goal.goal_id } for goal in all_goals]

    # aggregatate goals vs actual for each category
    all_activties = History.query.filter_by(username=username).all()
    if not all_activties and not all_goals:
        return jsonify({"msg": "Currently no data available for this user", "success": "false"}), 404
    [{'username': activity.username, 'activity_date': activity.activity_date,
                             'category': activity.category, 'subcategory': activity.subcategory,
                             'param_name': activity.param_name, 'param_value': activity.param_value,
                             'emission': round(activity.emission,2), 'history_id': activity.history_id } for activity in all_activties]

    # aggregate actual for each category in current month and previous month
    transport_total, household_total, food_total, personal_care_total = 0,0,0,0
    transport_total_prev, household_total_prev, food_total_prev, personal_care_total_prev = 0,0,0,0
    prev2_total, prev3_total, prev4_total, prev5_total, prev6_total = 0,0,0,0,0
    for activity in all_activties:
        # get data for current month
        if (activity.activity_date.year == year and activity.activity_date.month == month):
            if activity.category == 'Transport':
                transport_total += activity.emission
            elif activity.category == 'Household':
                household_total += activity.emission
            elif activity.category == 'Food':
                food_total += activity.emission
            elif activity.category == 'Personal Care':
                personal_care_total += activity.emission
        # get data for previous month
        elif (activity.activity_date.year == prev_year and activity.activity_date.month == prev_month):
            if activity.category == 'Transport':
                transport_total_prev += activity.emission
            elif activity.category == 'Household':
                household_total_prev += activity.emission
            elif activity.category == 'Food':
                food_total_prev += activity.emission
            elif activity.category == 'Personal Care':
                personal_care_total_prev += activity.emission
        elif (activity.activity_date.year == prev_year_2 and activity.activity_date.month == prev_month_2):
            prev2_total +=  activity.emission
        elif (activity.activity_date.year == prev_year_3 and activity.activity_date.month == prev_month_3):
            prev3_total +=  activity.emission
        elif (activity.activity_date.year == prev_year_4 and activity.activity_date.month == prev_month_4):
            prev4_total +=  activity.emission
        elif (activity.activity_date.year == prev_year_5 and activity.activity_date.month == prev_month_5):
            prev5_total +=  activity.emission
        elif (activity.activity_date.year == prev_year_6 and activity.activity_date.month == prev_month_6):
            prev6_total +=  activity.emission


    # calculate change for each category
    transport_change = transport_total - transport_total_prev
    household_change = household_total - household_total_prev
    food_change = food_total - food_total_prev
    personal_care_change = personal_care_total - personal_care_total_prev

    # aggregate target for each category
    transport_target, household_target, food_target, personal_care_target = 0,0,0,0
    for goal in all_goals:
        if goal.category == 'Transport':
            transport_target += goal.emission
        elif goal.category == 'Household':
            household_target += goal.emission
        elif goal.category == 'Food':
            food_target += goal.emission
        elif goal.category == 'Personal Care':
            personal_care_target += goal.emission

    # agg current and prev months as well for timeseries
    current_month = transport_total + household_total + food_total + personal_care_total
    prev1_total = transport_total_prev + household_total_prev + food_total_prev + personal_care_total_prev
    total_target = transport_target + household_target + food_target + personal_care_target

    return jsonify({"msg": "All activities of current user", "success": "true",
                    "content" : all_goals_json,
                    "overall_target" : round(total_target,2),
                    "performance" : [
                        {"name" : "Transport", "actual" : round(transport_total,2),
                         "target" : round(transport_target,2), "change": round(transport_change, 2)},
                        {"name": "Household", "actual" : round(household_total,2),
                         "target" : round(household_target,2), "change": round(household_change, 2)},
                        {"name": "Food", "actual" : round(food_total,2),
                         "target" : round(food_target,2), "change": round(food_change, 2)},
                        {"name": "Personal Care", "actual" : round(personal_care_total,2),
                         "target" : round(personal_care_target,2), "change": round(personal_care_change, 2)}],
                    "timeseries" : [
                        {"month" : format_month(prev_month_6), "value" : prev6_total, "target" :  round(total_target,2)},
                        {"month" : format_month(prev_month_5), "value" : prev5_total, "target" :  round(total_target,2)},
                        {"month" : format_month(prev_month_4), "value" : prev4_total, "target" :  round(total_target,2)},
                        {"month" : format_month(prev_month_3), "value" : prev3_total, "target" :  round(total_target,2)},
                        {"month" : format_month(prev_month_2), "value" : prev2_total, "target" :  round(total_target,2)},
                        {"month" : format_month(prev_month), "value" : prev1_total, "target" :  round(total_target,2)},
                        {"month" : format_month(month), "value" : current_month, "target" :  round(total_target,2)}
                        ]
                         })

# retrieve all logged activities for a user and their total footprint
@app.route('/profile', methods=['GET'])
def get_profile():
    username = request.args.get('username')
    # get log of all activities
    all_logs= Activity.query.filter_by(username=username).all()
    if not all_logs:
        all_logs_json = []
    else:
        all_logs_json = [{'username': log.username, 'activity_date': log.activity_date, 'activity': log.activity,
                        'points': log.points, 'activity_id': log.activity_id } for log in all_logs]

    total_points = 0
    # get total points
    for log in all_logs:
        total_points += log.points

    # get currently available profile information
    user_info = User.query.filter_by(username=username).first()
    if user_info.birthday is not None:
        birthday = user_info.birthday.strftime('%Y-%m-%d')
    else:
        birthday = None
    user_info_json = {'username': user_info.username, 'fullname': user_info.fullname, 'email': user_info.email,
                        'gender': user_info.gender, 'birthday': birthday }

    return jsonify({"msg": "All activities of current user", "success": "true",
                     "Activities" :  all_logs_json[::-1],
                     "Points" : total_points,
                     "Info" : user_info_json})

@app.route('/updateinfo', methods=['POST'])
def update_info():
    print('we are in the user function')
    username = request.json.get('username')
    fullname = request.json.get('name')
    email = request.json.get('email')
    gender = request.json.get('gender')
    date = request.json.get('birthday')
    if date:
        date_format = '%Y-%m-%d'
        birthday = datetime.strptime(date, date_format)
    print('We have received: ', username, fullname, gender, date)

    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({'msg': 'User does not exist', 'success' : 'false'}), 404
    else:
        # update all changes in the DB
        if fullname:
            user.fullname = fullname
        if gender:
            user.gender = gender
        if email:
            user.email = email
        if date:
            user.birthday = birthday
        db.session.commit()
        return jsonify({'msg': 'Successfully updated user', 'success' : 'true'}), 201






# get correct previous month and year
def get_prev_month_year(month, year):
    prev_month = month-1
    prev_year = year
    if (prev_month == 0):
        prev_month = 12
        prev_year = year - 1
    return prev_month, prev_year

def format_month(month):
    months = {1: "January", 2:"Feburary", 3: "March", 4: "April", 5: "May", 6:"June",
              7:"July", 8: "August", 9:"September", 10: "October", 11: "November", 12:"December"}
    return months[month]

if __name__ == '__main__':
    app.run(debug=True)
