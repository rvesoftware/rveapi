import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const orderSchema = new mongoose.Schema({
    orderItems:[
        {
            name: {type: String},
            qty: {type: String},
            image: {type: String},
            price: {type: String},
            product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
        }
    ],
    shippingAddress: {
        fullName: { type: String, required: true },
        identification: Number,
        phone: Number,
        address: { type: String, required: true },
        city: { type: String, required: true },
        lat: Number,
        lng: Number,
    },
    paymentMethod: { type: String, required: true },
    orderStatus: { type: Number},
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
}, {
    versionKey: false,
    timestamps: true
});

orderSchema.plugin(mongoosePaginate);
const Order = mongoose.model('Order', orderSchema);
export default Order;