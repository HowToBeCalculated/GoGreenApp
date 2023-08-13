"""Make database

Revision ID: 5474e6250fd3
Revises:
Create Date: 2023-08-12 10:07:14.935668

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '5474e6250fd3'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('GROUPS',
    sa.Column('group_id', sa.Integer(), nullable=False),
    sa.Column('group_name', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('group_id'),
    sa.UniqueConstraint('group_name')
    )
    op.create_table('USERS',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('password', sa.String(length=200), nullable=False),
    sa.Column('postcode', sa.String(length=6), nullable=True),
    sa.Column('date_of_birth', sa.Date(), nullable=True),
    sa.Column('date_joined', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('user_id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('ACTIVITY',
    sa.Column('activity_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('activity_date', sa.DateTime(), nullable=False),
    sa.Column('activity', sa.String(length=256), nullable=False),
    sa.Column('points', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['USERS.user_id'], ),
    sa.PrimaryKeyConstraint('activity_id'),
    sa.UniqueConstraint('activity')
    )
    op.create_table('GOALS',
    sa.Column('goal_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('category', sa.String(length=256), nullable=False),
    sa.Column('subcategory', sa.String(length=256), nullable=False),
    sa.Column('param_name', sa.String(length=256), nullable=True),
    sa.Column('param_value', sa.Float(precision=6), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['USERS.user_id'], ),
    sa.PrimaryKeyConstraint('goal_id')
    )
    op.create_table('HISTORY',
    sa.Column('history_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('activity_date', sa.DateTime(), nullable=False),
    sa.Column('category', sa.String(length=256), nullable=False),
    sa.Column('subcategory', sa.String(length=256), nullable=False),
    sa.Column('param_name', sa.String(length=256), nullable=True),
    sa.Column('param_value', sa.Float(precision=6), nullable=False),
    sa.Column('emission', sa.Float(precision=6), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['USERS.user_id'], ),
    sa.PrimaryKeyConstraint('history_id')
    )
    op.create_table('MEMBERSHIP',
    sa.Column('membership_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('group_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['group_id'], ['GROUPS.group_id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['USERS.user_id'], ),
    sa.PrimaryKeyConstraint('membership_id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('MEMBERSHIP')
    op.drop_table('HISTORY')
    op.drop_table('GOALS')
    op.drop_table('ACTIVITY')
    op.drop_table('USERS')
    op.drop_table('GROUPS')
    # ### end Alembic commands ###
