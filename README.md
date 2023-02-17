# CS361


First must run [npm install] and [npm start] to connect to database within VS Code. 
To request data from the database: 

Create an http file and use the following GET requests. 

### Request: Retrieve the tests already created
GET http://localhost:3000/moods

### Request: Retrieve a specific test by date. Change date below for specific dates in question, use the same format. 
GET http://localhost:3000/moods/2023-02-01



If connection is succesful, running the above get requests will receive a response and display the database tables as json. 


![UML](https://user-images.githubusercontent.com/102495067/219552761-f599deaa-c64e-4be2-823e-e45699a69980.JPG)
