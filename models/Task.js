const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	// for validation, set properties to objects and give them a type, required bool, default, maxlength, and other validators
	name: {
		type: String,
		required: [true, "Must Provide A Name"],
		trim: true,
		maxlength: [25, "Name cannot be more than 20 characters"],
	},
	completed: {
		type: Boolean,
		//new tasks are not completed by default
		default: false,
	},
});

module.exports = mongoose.model("Task", TaskSchema);
