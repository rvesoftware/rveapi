import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const computerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    specs: [
      {
        name: {
          type: String,
        },
        price: {
          type: String,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
      },
    ],
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      default: './img/default.png',
    },
    games:[{
        name: {
            type: String
        },
        image:{
            type: String
        },
        fps: {
            type: Number
        }
    }],
    programs:[{
        name: {
            type: String
        },
        image:{
            type: String
        },
    }],
    description: {
      type: String,
    },
    type:{
      type: String,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

computerSchema.plugin(mongoosePaginate);
const Computer = mongoose.model('Computer', computerSchema);
export default Computer;