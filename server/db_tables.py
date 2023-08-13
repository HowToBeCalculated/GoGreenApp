from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'USERS'

    #user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(200))
    postcode = db.Column(db.String(6))
    date_of_birth = db.Column(db.Date)
    date_joined = db.Column(db.DateTime, nullable=False, default=db.func.now())


class Group(db.Model):
    __tablename__ = 'GROUPS'

    group_id = db.Column(db.Integer, primary_key=True)
    group_name = db.Column(db.String(50), unique=True, nullable=False)


class Membership(db.Model):
    __tablename__ = 'MEMBERSHIP'

    membership_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), db.ForeignKey('USERS.username'), nullable=False)
    #user_id = db.Column(db.Integer, db.ForeignKey('USERS.user_id'), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey('GROUPS.group_id'), nullable=False)

    user = db.relationship("User", backref=db.backref("memberships", lazy=True))
    group = db.relationship("Group", backref=db.backref("memberships", lazy=True))


class Activity(db.Model):
    __tablename__ = 'ACTIVITY'

    activity_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), db.ForeignKey('USERS.username'), nullable=False)
    #user_id = db.Column(db.Integer, db.ForeignKey('USERS.user_id'), nullable=False)
    activity_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    activity = db.Column(db.String(256), unique=True, nullable=False)
    points = db.Column(db.Integer)


class Goals(db.Model):
    __tablename__ = 'GOALS'

    goal_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), db.ForeignKey('USERS.username'), nullable=False)
    #user_id = db.Column(db.Integer, db.ForeignKey('USERS.user_id'), nullable=False)
    category = db.Column(db.String(256), nullable=False)
    subcategory = db.Column(db.String(256), nullable=False)
    param_name = db.Column(db.String(256))
    param_value = db.Column(db.Float(precision=6))


class History(db.Model):
    __tablename__ = 'HISTORY'

    history_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), db.ForeignKey('USERS.username'), nullable=False)
    #user_id = db.Column(db.Integer, db.ForeignKey('USERS.user_id'), nullable=False)
    activity_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    category = db.Column(db.String(256), nullable=False)
    subcategory = db.Column(db.String(256), nullable=False)
    param_name = db.Column(db.String(256))
    param_value = db.Column(db.Float(precision=6), nullable=False)
    emission = db.Column(db.Float(precision=6), nullable=False)
