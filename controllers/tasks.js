const Task = require("../models/Task");

// retrieve all tasks
const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (err) {
		res.status(500).json(err);
	}
	//res.send("get all tasks");
};

//create a task
const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (err) {
		res.status(500).json(err); //general
	}

	//const task = await Task.create({ name: "first task" });
	//res.json(req.body);
};

// get a single task
const getTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOne({ _id: taskId });
		//const task = await Task.findById(req.params.id);

		if (!task) {
			return res.status(404).json({ msg: `No task with id: ${taskId}` });
		}
		res.status(200).json({ task });
	} catch (err) {
		res.status(500).json(err); //general
	}
	//res.json(req.body);
	//res.json({ id: req.params.id });
};

const updateTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, { new: true, runValidators: true });

		if (!task) {
			return res.status(404).json({ msg: `No task with id: ${taskId}` });
		}
		res.status(200).json({ task });
		//res.status(200).json({ id: taskId, data: req.body });
	} catch (err) {
		res.status(500).json(err); //general
	}
	//res.send("updated task");
};

const deleteTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOneAndDelete({ _id: taskId });

		if (!task) {
			return res.status(404).json({ msg: `No task with id: ${taskId}` });
		}
		//const task = await Task.findByIdAndDelete(req.params.id);
		res.status(200).send();
		//res.status(200).json({ task });
	} catch (err) {
		res.status(500).json(err); //general
	}
	//res.send("deleted task");
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
