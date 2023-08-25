FROM python:3.8-buster
WORKDIR /app
RUN pip install pipenv
COPY . .
CMD ["make", "setup_and_run"]
