import {
  validateSigninAdminInput,
  validateSigninInput,
  validateSignupInput,
} from "../libs/validators.js";
import Admin from "../models/Admin.js";
import { StreamChat } from "stream-chat";
import { connect } from "getstream";
import bcrypt from 'bcrypt'
import jwt  from "jsonwebtoken";
import config from "../helpers/config.js";
import crypto from 'crypto'
import {generateToken} from '../libs/chackAuth.js'

const api_key = config.STREAM_API_KEY;
const api_secret = config.STREAM_API_SECRET;
const app_id = config.STREAM_APP_ID;


export const getAllAdmins = async (req, res) => {
  try{
    const admins = await Admin.find({});
    console.log(admins)
    res.send(admins)
  }catch(err){
    console.log(err)
  }
};



export const signup = async (req, res) => {
    const {name, middlename, lastname, middlelastname, username, email, phone, password, image} = req.body
    
    try{
        const { valid, errors } = validateSignupInput(email, password);

        if (!valid) {
            throw new Error('Error', { errors });
        }

        const admin = await Admin.findOne({email});

        if(admin){
            throw new Error(104)
        }

        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect(api_key, api_secret, app_id);

        const hashedPassword = await bcrypt.hashSync(password, 10);        

        const tokenChat = serverClient.createUserToken(userId);

        const newAdmin = new Admin({tokenChat, name, middlename, middlelastname, lastname, username, email, phone, password: hashedPassword, image });
        // const token = jwt.sign({ _id: newAdmin._id }, config.JWT_SIGNIN_KEY, {});

        const token = generateToken(newAdmin)

        newAdmin.save();

        res.send({
          token,
          newAdmin
        });

    }catch(err){
        console.log(err)
        throw new Error(104)
    }
}


export const signin = async (req, res) => {
  const { username, password } = req.body;

  console.log(req.body)
  try {
    const { errors, valid } = validateSigninAdminInput(username, password);

    // const serverClient = connect(api_key, api_secret, app_id);
    // const client = StreamChat.getInstance(api_key, api_secret);

    // const {users} = await client.queryUsers({name:username})

    // if(!users.length) return res.status(400).json({message: 'User not found'});


    if (!valid) {
      throw new Error(108, { errors });
    }

    const admin = await Admin.findOne({ username });

    console.log(admin)

    if (!admin) {
      errors.general = 105;
      throw new Error(108, { errors });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      errors.general = 108;
      console.log(errors)
      // throw new Error(108, { errors });
    }

    const token = jwt.sign({ _id: admin._id }, config.JWT_SIGNIN_KEY, {});

    // const token = serverClient.createUserToken(users[0].id)

    res.send({
      _id: admin._id,
      username: admin.username,
      name: admin.name,
      lastname: admin.lastname,
      password: admin.password,
      image: admin.image,
      tokenChat: admin.tokenChat,
      token,
      userId: users[0].id
    });
  } catch (err) {
    console.log(err)
    // throw new Error(err);
  }
};
