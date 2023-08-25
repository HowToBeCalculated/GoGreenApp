setup:
	pip install pipenv
	pipenv install
	pipenv run alembic upgrade head # creates database

add_random_data:
	pipenv run python add_random_data.py

run:
	pipenv run python server.py
