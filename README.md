# Todo List Client - ( In Progress ).

# Todo List API

![Todo List API Logo](/todo-list-api-logo.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Todo List API is a RESTful API that allows users to manage their todo lists. It is built using Node.js, Express.js, and MongoDB.

## Features

- Create, read, update, and delete todo items
- Mark todo items as completed
- Filter and sort todo items
- User authentication and authorization

## Installation

1. Clone the repository:

```bash
git clone https://github.com/richarddanipog/todo-list-api.git
```

2. Install dependencies:

```bash
cd todo-list-api
npm install
```

3. Set up environment variables:

Create a `.env` file in the root of the project and add the following environment variables:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/tododb
```

## Usage

To start the API server, run the following command:

```bash
npm start
```

The server will start on the specified port (default is 3000). You can now make API requests to the provided endpoints.

Also need to run docker on your machine if you want this to work.

```bash
docker pull mongo
docker run -d -p 27017:27017 --name my-mongo mongo
```

## API Endpoints

The following endpoints are available:

- `POST /api/todo`: Create a new todo item.
- `GET /api/todo/:id`: Get a todo item by ID.
- `GET /api/todo`: Get all todo items.
- `PUT /api/todo/:id`: Update a todo item.
- `DELETE /api/todo/:id`: Delete a todo item.

## Environment Variables

- `PORT`: The port on which the server will run. Default is 3000.
- `MONGO_URI`: The MongoDB connection string.

## Contributing

Contributions to Todo List API are welcome! If you find a bug or have a feature request, please create an issue or submit a pull request.
