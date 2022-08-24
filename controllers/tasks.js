const Task = require("../models/Task");

const getAllTasks = (req, res) => {
	res.send("get all tasks");
};

const createTask = async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
	//const task = await Task.create({ name: "first task" });
	//res.json(req.body);
};

const getTask = (req, res) => {
	res.json(req.body);
	//res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
	res.send("updated task");
};

const deleteTask = (req, res) => {
	res.send("deleted task");
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
