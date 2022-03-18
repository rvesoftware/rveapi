import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const clientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    identification:{
        type: Number,
    },
    phone:{
        type: Number,
    },
    address:{
        type: String,
    },
    city:{
        type: String,
    },
    source:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    icon:{
        type: String,
    },
    contacts:[{
        note:{type: String}
    }]
}, {
    versionKey: false,
    timestamps: true
});

clientSchema.plugin(mongoosePaginate);
const Client = mongoose.model('Client', clientSchema);
export default Client;