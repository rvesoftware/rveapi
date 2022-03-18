import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    image:{
        type: String,
        trim: true,
        default: "./img/default.png"
    },
    price:{
        type: Number,
        required: true
    },
    wattage:{
        type: Number,
        default: 0
    },
    status:{
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

productSchema.plugin(mongoosePaginate);
const Product = mongoose.model('Product', productSchema);
export default Product;