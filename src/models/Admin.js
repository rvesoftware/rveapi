import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: false
    },
    lastname:{
        type: String,
        required: false
    },
    middlelastname:{
        type:String
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type:Number,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    image:{
        type: String,
        trim: true,
    },
    tokenChat:{
        type: String,
    }
}, {
    versionKey: false,
    timestamps: true
});

adminSchema.plugin(mongoosePaginate);
const Admin = mongoose.model('Admin', adminSchema);
export default Admin;