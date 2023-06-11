ARG PYTHON_MAJOR_VERSION=3.11

# via https://github.com/pypa/pipenv/issues/3160#issuecomment-510951442
FROM python:${PYTHON_MAJOR_VERSION}-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 

RUN pip install --upgrade pip
RUN pip install --upgrade --no-cache-dir pipenv
RUN pip install pytest

WORKDIR /app

COPY Pipfile Pipfile.lock ./

RUN echo PIP_IGNORE_INSTALLED=1 >> .env

# Note: ensure that these variables are set during
# pipenv lock
RUN pipenv install --system --deploy --ignore-pipfile 

CMD ["tail", "-f", "/dev/null"]
