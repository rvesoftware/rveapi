import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
}, {
    versionKey: false,
    timestamps: true
});

noteSchema.plugin(mongoosePaginate);
const Note = mongoose.model('Note', noteSchema);
export default Note;