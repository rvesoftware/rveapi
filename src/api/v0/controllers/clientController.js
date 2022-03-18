import Client from "../models/Client.js";
import getPagination from '../libs/getPagination.js'
import {generateToken} from '../libs/utils.js';

export const findAllClients = async(req, res) => {
    try
    {
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page, size);

        const clients = await Client.find({});
        res.json({
            // totalItems: clients.totalDocs,
            users: clients,
            // totalPages: clients.totalPages,
            // currentPage: clients.page - 1
        })
    }catch(error){
        res.status(500).json({
            message: error.meesage || 'Something goes wrong retrieving the users'
        })
    }
    
}

export const createClient = async(req, res) =>{
    const newClient = new Client({name: req.body.name, identification: req.body.identification, phone:req.body.phone, address: req.body.address, city: req.body.city, source: req.body.source, email: req.body.email, icon: req.body.icon})
    const clientCreated = await newClient.save();
    res.json(clientCreated);
}

export const findOneClient = async(req, res) =>{
    const user = await Client.findById(req.params.id);
    res.json(user);
}

export const deleteClient = async(req, res) =>{
    const user = await Client.findByIdAndDelete(req.params.id);
    res.json({
        message: 'User were deleted successfully'
    });
}
