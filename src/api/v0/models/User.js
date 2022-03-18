import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique:true,},
    firstname: {type: String, required: true},
    middlename: {type: String},
    lastname: {type: String, required:true},
    middlelastname: {type: String},
    email: {type: String, required: true, unique:true, trim:true, lowercase:true},
    password: {type: String, required: true},
    points: {type: Number, default: 0},
    phone: {type: String},
    games: {type: Number, default: 0},
    tournaments: {type: Number, default: 0},
    friends: {type: Number, default: 0},
    views: {type: Number, default: 0},
    level: {type: Number, default: 0},
    photo: {type: String, default: "./avatar.png"},
    followers: {type: Number, default: 0},
    isActive: {type: Boolean},
    isBlocked: {type: Boolean},
    isReported:  {type: Boolean},
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;