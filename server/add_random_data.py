from datetime import datetime
from flask import Flask
from faker.factory import Factory
import numpy as np
import pandas as pd

from db_tables import (
    db,
    User,
    Group,
    Membership,
    Activity,
    Goals,
    History,
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
        # 'first_name': 'Dante',
        # 'last_name': 'Alighieri',
        # 'email': 'dante@dante.com',
        # 'password': 'abc123',
        # 'postcode': '123456',
        # 'date_of_birth': datetime.strptime('1980-01-1', '%Y-%m-%d').date(),
        # 'date_joined': datetime.strptime('2021-01-01 00:00:00', '%Y-%m-%d %H:%M:%S'),
    }

    user_profiles = [dante] + [
        {
            'username': fake.user_name()+str(i), # generate unique user_name
            # 'first_name': fake.first_name(),
            # 'last_name': fake.last_name(),
            # 'email': fake.free_email().replace('@', str(i)+'@'),
            # 'password': fake.password(),
            # 'postcode': fake.postcode(),
            # 'date_of_birth': fake.date_of_birth(),
            'date_joined': fake.date_time_between_dates(datetime_start=APP_START_DATE, datetime_end='now', tzinfo=None)
        }
        for i in range(1, 1000)
    ]

    user_ids = [user['username'] for user in user_profiles]

    # add groups to database
    group_profiles = [
        {
            'group_id': i,
            'group_name': fake.company()+str(i) # generate unique group_name
        }
        for i in range(NUM_OF_GROUPS)
    ]

    # add memberships to database
    group_ids = [group['group_id'] for group in group_profiles]
    memberships = []

    for group in group_ids:
        group_size = rng.randint(*GROUP_MEMBER_RANGE)
        memberships += [(user, group) for user in rng.choice(user_ids, size=group_size, replace=False)]

    memberships = [(i, *j) for i, j in enumerate(memberships)]

    # Insert Users
    if User.query.count() == 0:
        for profile in user_profiles:
            user = User(**profile)
            db.session.add(user)
        db.session.commit()

    # Insert Groups
    if Group.query.count() == 0:
        for profile in group_profiles:
            group = Group(**profile)
            db.session.add(group)
        db.session.commit()

    # Insert Memberships
    if Membership.query.count() == 0:
        for membership in memberships:
            membership_record = Membership(membership_id=membership[0], username=membership[1], group_id=membership[2])
            db.session.add(membership_record)
        db.session.commit()
