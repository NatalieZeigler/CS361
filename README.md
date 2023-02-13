# CS361


First must run [npm install] and [npm start] to connect to database within VS Code. 
To request data from the database: 

Create an http file and use the following GET requests. 

### Request: Retrieve the tests already created
GET http://localhost:3000/questions 

### Request: Retrieve a specific test by ID
GET http://localhost:3000/questions/[id]

If connection is succesful, running the above get requests will receive a response and display the database tables as json. 

![UML](https://user-images.githubusercontent.com/102495067/218599857-2547a252-22f8-40b3-b512-5b02575c86d2.JPG)
