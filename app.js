//console.log("task manager app");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
// app.get("/hello", (req, res) => {
// 	res.send("Task Manager App");
// });

app.use("/api/v1/tasks", tasks);

// create a new task
app.get("/api/v1/tasks", (req, res) => {});

// create a new task
app.post("/api/v1/tasks", (req, res) => {});

// get single task
app.get("/api/v1/tasks/:id", (req, res) => {});

// update task
app.patch("/api/v1/tasks/:id", (req, res) => {});

// delete task
app.delete("/api/v1/tasks/:id", (req, res) => {});

const PORT = 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
