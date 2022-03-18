import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const quotationSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    code: { type: Number, required: true },
    note: {
      type: String,
    },
    items: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

quotationSchema.plugin(mongoosePaginate);
const Quotation = mongoose.model('Quotation', quotationSchema);
export default Quotation;
