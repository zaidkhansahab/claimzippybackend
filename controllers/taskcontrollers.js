const taskmodels = require("../models/taskmodels");
const TaskModel = require("../models/taskmodels")

module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find()
    res.send(tasks)

};

module.exports.saveTasks = (req, res) => {
    const { task, description } = req.body

    taskmodels.create({ task, description })
        .then((data) => {
            console.log("saved data success");
            res.status(201).send(data)
        }).catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "somthing wrong" })
        });
};
module.exports.updateTasks = (req, res) => {
    const { id } = req.params
    const { task, description } = req.body

    taskmodels.findByIdAndUpdate(id, { task, description })
        .then(() => res.send("updated successfully"))

        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "somthing wrong" })
        });
};

module.exports.deleteTasks = (req, res) => {
    const { id } = req.params
    taskmodels.findByIdAndDelete(id)
        .then(() => res.send("deleted successfully"))

        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "somthing wrong" })
        });
};