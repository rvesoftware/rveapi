import Order from '../models/Order.js';
import getPagination from '../libs/getPagination.js';

export const findAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});

    res.json({
      orders: orders,
    });
  } catch (err) {
    res.status(500).json({
      message: error.meesage || 'Something goes wrong retrieving the users',
    });
  }
};

export const createOrder = async (req, res) => {
  // console.log(req.body.user);
  // const newUser = req.body.user;
  console.log(req.body.shippingAddress)
  const newOrder = new Order({
    // user: newUser._id,
    orderItems: req.body.orderItems,
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    paymentResult: req.body.paymentResult,
    itemsPrice: req.body.itemsPrice,
    shippingPrice: req.body.shippingPrice,
    taxPrice: req.body.taxPrice,
    totalPrice: req.body.totalPrice,
    isPaid: req.body.isPaid,
    isDelivered: req.body.isDelivered,
    paidAt: req.body.paidAt,
    deliveredAt: req.body.deliveredAt,
  });
  const createdOrder = await newOrder.save();
  res.json(createdOrder);
};

export const findOneOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
};

export const deleteOrder = async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  res.json({
    message: 'Order were deleted successfully',
  });
};
