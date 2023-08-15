"""add emission to Goals table

Revision ID: 7b193347ca92
Revises: 2214b166db57
Create Date: 2023-08-15 08:47:51.644277

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7b193347ca92'
down_revision: Union[str, None] = '2214b166db57'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('GOALS', sa.Column('emission', sa.Float(precision=6), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('GOALS', 'emission')
    # ### end Alembic commands ###
