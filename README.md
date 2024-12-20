# To-Do List RESTful API

This is a simple To-Do List application built with Express.js and MongoDB, allowing users to perform CRUD operations on their to-do tasks with JWT-based authentication.

## Table of Contents

1. Installation
2. Technologies Used
3. API Endpoints
   - [User Authentication]
   - [To-Do Operations]
4. Testing the API with Postman




## Installation

To set up the To-Do List API on your local machine:

1. **Clone the repository** (this step will be available once the project is uploaded to GitHub):
   ```bash
   git clone https://github.com/JavvajiPraveenKumar/todo-api.git


## Technologies Used

Express.js - Web framework for Node.js
MongoDB - NoSQL database
JWT - JSON Web Token for authentication
Bcrypt - For password hashing
UUID - For generating unique task IDs
Postman - API testing and documentation
API Endpoints
User Authentication
POST /user/reg - Register a new user

Request Body:
json
Copy code
{
  "_id": "john.doe@example.com",
  "username": "John Doe",
  "password": "password123"
}

Response:
 { "msg": "Account created successfully" }
{ "msg": "Account already exists with the given email" }
POST /user/login - User login

Request Body:
if we will data in json form like

{
  "_id": "john.doe@example.com",
  "password": "password123"
}

 The Response will  get:
 
 { "token": "jwt_token", "_id": "john.doe@example.com", "username": "John Doe" }
{ "msg": "Invalid password" }
{ "msg": "User not found. Please check email" }

## To-Do Operations
POST /Todo/createtodo - Create a new to-do item
Request Body:
if we will data in json form like
{
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread",
  "state": "incomplete",
  "userId": "john.doe@example.com"
}
Response:
{ "msg": "New task added" }
{ "msg": "User ID is required" }

GET /Todo/getAll/:userId - Get all to-do items for a user
Response:
 [{ "_id": "task_id", "title": "Buy groceries", "description": "Milk, Eggs, Bread", "state": "incomplete", "userId": "john.doe@example.com" }]
{ "msg": "No to-dos found" }


GET /Todo/getbyid/:id/:userId - Get a specific to-do item by ID
Response:
{ "_id": "task_id", "title": "Buy groceries", "description": "Milk, Eggs, Bread", "state": "incomplete", "userId": "john.doe@example.com" }
{ "msg": "To-do not found" }


PUT /Todo/update - Update a to-do item
Request Body:
json
Copy code
{
  "_id": "task_id",
  "userId": "john.doe@example.com",
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread, Butter",
  "state": "incomplete"
}
Response:
 { "msg": "Task updated" }
 { "msg": "Task not found" }


DELETE /Todo/delete/:id/:userId - Delete a specific to-do item
Response:
{ "msg": "Task deleted" }
{ "msg": "Task not found" }

DELETE /Todo/clear/:userId - Delete all to-do items for a user
Response:
{ "msg": "All tasks cleared" }
{ "msg": "No tasks to clear" }

Testing the API with Postman
To test the API with Postman, follow these steps:

Import Postman Collection:
Download or import the Postman collection file (you can export it from Postman).
Import the collection into Postman using the "Import" feature.
Authentication:

First, test the /user/reg and /user/login endpoints to register and log in a user.
Copy the JWT token received after login.
Create To-Do Items:

Use the /Todo/createtodo endpoint to create a new to-do item. Include the userId and JWT token in the headers as Authorization: Bearer <jwt_token>.
CRUD Operations:

Test other to-do endpoints (getAll, getbyid, update, delete, clear) by passing the appropriate userId and task ID.
Error Handling
-> This status code is returned when the request body is invalid or missing required fields.
->Returned when a resource (such as a to-do item) is not found.
->This is an unexpected error on the server side.
Contribution
If you'd like to contribute to this project, please fork the repository, create a new branch for your feature or bug fix, and submit a pull request.


### **Explanation of the Structure:**

- **Installation**: Provides step-by-step instructions on how to set up the project locally.
- **Technologies Used**: Lists the technologies and libraries used to build the API.
- **API Endpoints**: Documents each endpoint, including the method, request body, and possible responses. 
- **Testing the API with Postman**: Explains how to test the API using Postman.
- **Error Handling**: Describes the common errors you may encounter and how to handle them.
- **Contribution**: Invites others to contribute to the project.













"# Todo-task" 
"# Todo-task" 
