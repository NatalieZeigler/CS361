# CS361


First must run [npm install] and [npm start] to connect to database within VS Code. 
To request data from the database: 

Create an http file and use the following GET requests. 

### Request 4: Retrieve the tests already created
GET http://localhost:3000/questions 

### Request 5: Retrieve a specific test by ID
GET http://localhost:3000/questions/[id]

If connection is succesful, running the above get requests will receive a response and display the database tables as json. 
