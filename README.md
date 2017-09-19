# NODE SERVER #
*Dave Ogle*

A simple node express server template providing:
- Separation of Concerns through Models and Controllers
- Routing of paths to separate controllers
- Logging via [winston.js](https://github.com/winstonjs/winston)
- Authentication middleware
- Websockets using [socket.io](https://github.com/socketio/socket.io)
- Separation of Database connection

This project aims to provide a quick starting template for creating a Node Express server with a file structure allowing separation of concerns.

The setup aims to allow a user to easily switch out databases, logging service and websocket service. 

Basic templating for authentication is provided as middleware.

Paths should be defined in the ```src/controllers/index.js``` file and provided with controllers.

Logs are created when the server is run and stored under ```logs``` folder.

## Getting Started ##

run ```npm i``` followed by ```npm start```
