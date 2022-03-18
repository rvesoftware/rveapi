import User from '../models/User.js';
import getPagination from '../libs/getPagination.js';
import { generateToken } from '../libs/utils.js';
import bcrypt from 'bcrypt';
import cloudinary from "cloudinary"
import multer from "multer"
import streamifier from 'streamifier';

cloudinary.config({
  cloud_name: "real-vision-enterprise",
  api_key: "462945265296275",
  api_secret: "VgRqwSXmGstaUO6eSSmVoi2y37o"
})

export const findAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size, allUsers.length);

    // const users = await User.paginate({}, { offset, limit });
    // res.json({
    //   totalItems: users.totalDocs,
    //   users: users.docs,
    //   totalPages: users.totalPages,
    //   currentPage: users.page - 1,
    // });
    res.json({ allUsers })
  } catch (error) {
    res.status(500).json({
      message: error.meesage || 'Something goes wrong retrieving the users',
    });
  }
};

export const createUser = async (req, res) => {
  const newPassword = bcrypt.hashSync(req.body.password, 8);

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: newPassword,
  });
  const userCreated = await newUser.save();
  res.json(userCreated);
};

export const findOneUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.json({
    message: 'User were deleted successfully',
  });
};

export const signin = async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ email: req.body.email });

  console.log(user);
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      console.log('entro21');
      res.send({
        _id: user._id,
        name: user.name,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    } else {
      res.status(500).json({
        message: 'Password incorrect',
      });
    }
  } else {
    res.status(500).json({
      message: 'User dont exits',
    });
  }
};

export const updateUser = async (req, res) => {

  const userId = req.body.userId
  console.log(userId)
  const user = await User.findOne({email: userId})
  
  let acountPoints = 0

  if(user)
  {

    console.log(user)
    if(req.body.middlename && !user.middlename)
    {
      acountPoints = acountPoints + 5;
    }
    if(req.body.middlelastname && !user.middlelastname)
    {
      acountPoints = acountPoints + 5;
    }

    if(req.body.image && !user.photo || user.photo == "./avatar.png")
    {
      acountPoints = acountPoints + 15;
    }

    if(req.body.phone && !user.phone)
    {
      acountPoints = acountPoints + 15;
    }
  }

  user.points = user.points + acountPoints; 
  user.middlename = req.body.middlename
  user.middlelastname = req.body.middlelastname
  user.photo = req.body.image
  user.phone = req.body.phone

  await user.save();

  res.json({user});
}

export const uploadImage = async (req, res) => {
  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {

      const stream = cloudinary.v2.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result)
        } else {
          reject(error)
        }
      })
      streamifier.createReadStream(req.files.file.data).pipe(stream)
    })
  }

  const result = await streamUpload(req)
  res.send(result)
}