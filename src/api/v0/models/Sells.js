import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const sellSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    revenue: {
      type: Number,
      required: true,
      trim: true,
    },
    perRevenue: {
      type: Number,
      required: true,
      trim: true,
    },
    item: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

sellSchema.plugin(mongoosePaginate);
const Sell = mongoose.model("Sell", sellSchema);
export default Sell;
