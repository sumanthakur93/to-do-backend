const userModel = require('../models/userModel')
const taskModel = require('../models/taskModel')


const addTask = async (req, res) => {
    const { title, description } = req.body;
    const { email, user_id } = req.userData;

    try {
        // const user = await userModel.findOne({ email });

        const newTask = new taskModel({ title, description, completed: false, userId: user_id });
        newTask.save()
       
        return res.status(200).json({ newTask });
    }
    catch (err) {
        return res.status(400).json({ err });
    }
};

const changeStatus = async (req, res) => {
    try {
        const { id } = req.body;
        const updateTask = await taskModel.findOne({ _id: id });

        if (!updateTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        updateTask.completed = true;
        await updateTask.save(); 

        return res.status(200).json({ updatedTask: updateTask });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

const removeTask = async (req, res) => {
    const { id } = req.body;

    await taskModel.findByIdAndDelete(id)
        .then(() => res.status(200).json({ message: "Task deleted successfully" }))
        .catch((error) => res.status(501).json({ message: error.message }))
};

const getTask = async (req, res) => {
   
    const { email, user_id } = req.userData;
   

    try {
        // const user = await userModel.findOne({ email });
   


        const resp = await taskModel.find({ userId: user_id });
      
        return res.status(200).json({ resp })
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({ err });
    }


};

module.exports = { addTask, getTask, removeTask, changeStatus };