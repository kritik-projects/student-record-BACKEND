


# Student Record API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A **RESTful API** to manage student records using **Node.js**, **Express**, and **MongoDB**.  
This project demonstrates CRUD operations, server-side validation, and a clean API structure.

---

## Features

- Connects **Express** server with **MongoDB** via **Mongoose**
- **Student Schema:** `{ name, course, age, city }`
- **API Endpoints:**
  - `GET /students` → Fetch all students
  - `POST /students` → Add a new student (name and course required)
  - `PUT /students/:id` → Update student information
  - `DELETE /students/:id` → Delete a student
- Basic validation for required fields (`name` and `course`)
## Frontend

The frontend of this project is built with **React** (or specify your framework if different). It provides a user-friendly interface to interact with the Student Record API.

### Features

- View all students in a table
- Add a new student using a form
- Update existing student details
- Delete a student
- Responsive and clean UI
---

## Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **MongoDB Atlas** – Cloud database
- **Mongoose** – ODM

---

## Installation

1. **Clone the repository**
	```bash
    git clone https://github.com/pyrajesh1601/Student-records.git
    cd Student-project
2. **Install dependencies**
	```bash
	npm install  
3.  **Set up MongoDB Atlas**
 -   Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free cluster.
    
-   Create a **database user** and note the username and password.
    
-   Get your **connection string (URI)**. It should look like this:
	```bash
	mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority 
4.  **Configure environment variables**
    
-   Create a `.env` file in the root of your project.
    
-   Add your MongoDB Atlas connection string and port:
	```ini
	MONGO_URI=your_mongodb_atlas_connection_string
	PORT=3000
5. **Start the server**
	 ```bash
	 npm start
 The API will run at: `http://localhost:3000`
## Usage

Test the API with **Postman**, **Insomnia**, or any API client.

**Example Requests:**

-   **GET all students**
    
	```http
	`GET /students` 
-   **POST a new student**
    
	```json
	`POST /students {  "name":  "John Doe",  "course":  "B.Tech CSE",  "age":  21,  "city":  "Raipur"  }` 
-   **PUT update a student**
	  ```json
	`PUT /students/:id {  "name":  "John Smith",  "course":  "B.Tech IT",  "age":  22,  "city":  	"Raipur"  }` 
-   **DELETE a student**
	```http
	`DELETE /students/:id`
## Author

**K Rajesh** – [GitHub Profile](https://github.com/pyrajesh1601)




