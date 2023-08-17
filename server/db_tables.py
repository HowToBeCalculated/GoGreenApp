from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'USERS'

    username = db.Column(db.String(64), primary_key=True)
    password = db.Column(db.String(64), nullable=False)
    fullname = db.Column(db.String(128))
    date_joined = db.Column(db.DateTime, nullable=False, default=db.func.now())


class Group(db.Model):
    __tablename__ = 'GROUPS'

    group_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    group_name = db.Column(db.String(64), unique=True, nullable=False)


class Membership(db.Model):
    __tablename__ = 'MEMBERSHIP'

    membership_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(64), db.ForeignKey('USERS.username'), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey('GROUPS.group_id'), nullable=False)

    user = db.relationship("User", backref=db.backref("memberships", lazy=True))
    group = db.relationship("Group", backref=db.backref("memberships", lazy=True))


class Activity(db.Model):
    __tablename__ = 'ACTIVITY'

    activity_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(64), db.ForeignKey('USERS.username'), nullable=False)
    activity_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    activity = db.Column(db.String(256), nullable=False)
    points = db.Column(db.Integer)


class Goals(db.Model):
    __tablename__ = 'GOALS'

    goal_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(64), db.ForeignKey('USERS.username'), nullable=False)
    category = db.Column(db.String(256), nullable=False)
    subcategory = db.Column(db.String(256), nullable=False)
    param_name = db.Column(db.String(256))
    param_value = db.Column(db.Float(precision=6))
    emission = db.Column(db.Float(precision=6))


class History(db.Model):
    __tablename__ = 'HISTORY'

    history_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(64), db.ForeignKey('USERS.username'), nullable=False)
    activity_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    category = db.Column(db.String(256), nullable=False)
    subcategory = db.Column(db.String(256), nullable=False)
    param_name = db.Column(db.String(256))
    param_value = db.Column(db.Float(precision=6), nullable=False)
    emission = db.Column(db.Float(precision=6), nullable=False)