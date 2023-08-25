from flask import Flask
from faker.factory import Factory
import numpy as np
import pandas as pd

from db_tables import (
    db,
    User,
)


SEED = 1234
NUM_OF_USERS = 1000
NUM_OF_GROUPS = 100
GROUP_MEMBER_RANGE = (0, 25)
APP_START_DATE = pd.to_datetime('2021-01-01')

rng = np.random.RandomState(SEED)

fake = Factory.create()
fake.seed(SEED)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gogreen.db'
db.init_app(app)

with app.app_context():

    dante = {
        'username': 'dante',
        'fullname': 'Dante Alighieri',
        'password': 'abc123',
    }

    user_profiles = [dante] + [
        {
            'username': fake.user_name()+str(i), # generate unique user_name
            'password': fake.password(),
            'date_joined': fake.date_time_between_dates(datetime_start=APP_START_DATE, datetime_end='now', tzinfo=None)
        }
        for i in range(1, 1000)
    ]

    # Insert Users
    if User.query.count() == 0:
        for profile in user_profiles:
            user = User(**profile)
            db.session.add(user)
        db.session.commit()
