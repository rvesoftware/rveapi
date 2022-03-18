import getPagination from '../libs/getPagination.js'
import {generateToken} from '../libs/utils.js';
import Task from "../models/Task.js";

export const findAllTasks = async(req, res) => {
    try
    {
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page, size);

        const tasks = await Task.find({});
        res.json({
            // totalItems: clients.totalDocs,
            tasks: tasks,
            // totalPages: clients.totalPages,
            // currentPage: clients.page - 1
        })
    }catch(error){
        res.status(500).json({
            message: error.meesage || 'Something goes wrong retrieving the users'
        })
    }
    
}
export const findMineAllTasks = async(req, res) => {
    try
    {
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page, size);

        const tasks = await Task.find({});
        res.json({
            // totalItems: clients.totalDocs,
            tasks: tasks,
            // totalPages: clients.totalPages,
            // currentPage: clients.page - 1
        })
    }catch(error){
        res.status(500).json({
            message: error.meesage || 'Something goes wrong retrieving the users'
        })
    }
    
}

export const createTask = async(req, res) =>{
    const newTask = new Task({title: req.body.title, description: req.body.description, priority: req.body.priority, users: req.body.users})
    const taskCreated = await newTask.save();
    res.json(taskCreated);
}

export const findOneTask = async(req, res) =>{
    const user = await User.findById(req.params.id);
    res.json(user);
}

export const deleteTask = async(req, res) =>{
    const task = await Product.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Product were deleted successfully'
    });
}

export const updateTask = async(req, res) => {
    const taskId = req.params.id;

    const task = await Task.findById(taskId);

    if(task){
        task.state = task.state + 1;
        const updatedTask = await task.save();
        res.send({ message: 'Task Updated', task: updatedTask });
    }else {
        res.status(404).send({ message: 'Task Not Found' });
      }
}
