const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "send-email"
});

app.get("/api/get", (request, response) => {
    const sqlGet = "SELECT * FROM users "; 
    db.query(sqlGet, (error, result) => {
        response.send(result)
    })
});

app.get("/", (request, response) => {
    response.send("Server is running!");
});

app.post("/api/post", (request, response) => {
    const {lastName, firstName, email} = request.body;
    const sqlInsert = "INSERT INTO users(firstName, lastName, email) VALUES (?, ?, ?)";
    db.query(sqlInsert, [firstName, lastName, email], (error, result) => {
        if(error) {
            console.log(error);
        }
    })
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})