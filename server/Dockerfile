# Python image that
FROM python:3.8-buster

# Set the working directory in the Docker container
WORKDIR /app

# Install pipenv, a package manager for Python
RUN pip install pipenv

# Copy the rest of the application to the Docker container
COPY . .

# Set up the database along with the API
CMD ["make", "setup_and_run"]
