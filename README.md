# Sber Andrei

![Logo](logo.png)

### Sber Andrei is a web application with a built-in assistant designed to streamline the work of underwriters.

## Design & Concept Art can be found [here](https://www.figma.com/file/9m8yLvrK7TpGUMcwFGYWgP/Hack-Change?type=design&node-id=0%3A1&mode=design&t=Mcz90KWZ3LZLYvqo-1)

## Project Structure

The project consists of two main components:

    client: This directory contains the React and JavaScript-based client application.

    api: This directory contains the Python-based API built using FastAPI.

## Running the Projects

### Client

To run the client application, navigate to the client directory and follow these steps:

    Install dependencies:

```bash
cd client
npm install
```

Start the development server:

```bash
    npm start
```

The client application will be accessible at http://localhost:3000.
API

To run the API, navigate to the api directory and follow these steps:

    Install dependencies:

```bash

cd api
pip install -r requirements.txt
```

Start the FastAPI application:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

The API will be accessible at http://localhost:8000.
Docker Configuration

To build and deploy the project using Docker, follow these steps:

#### Build the Docker image:

```bash
docker build -t sber-andrei .
```
#### Run the Docker container:

```bash
docker run -p 3000:3000 -p 8000:8000 sber-andrei
```

The client application will be accessible at http://localhost:3000, and the API will be accessible at http://localhost:8000.