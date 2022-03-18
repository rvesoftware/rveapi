import Sell from '../models/Sells.js';
import getPagination from '../libs/getPagination.js';
import { sendQuotationEmail } from '../services/emailService.js';

export const findAllSells = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);

    const sells = await Sell.find({});
    res.json({
      totalItems: sells.totalDocs,
      sells: sells,
      totalPages: sells.totalPages,
      currentPage: sells.page - 1,
    });
  } catch (error) {
      console.log(error)
    res.status(500).json({
      message: error.meesage || 'Something goes wrong retrieving the users',
    });
  }
};

export const createSell = async (req, res) => {
  const newSell = new Sell({
    clientName: req.body.clientName,
    price: req.body.price,
    revenue: req.body.revenue,
    perRevenue: req.body.perRevenue,
    item: req.body.item,
    city: req.body.city,
  });

  const sellCreated = await newSell.save();
  res.json(sellCreated);
};

export const findOneQuotation = async (req, res) => {
  const quotation = await Quotation.findById(req.params.id);
  res.json(quotation);
};

export const deleteSell = async (req, res) => {

    try{
        const sell = await Sell.findByIdAndDelete(req.params.id);
        console.log(sell)
        res.json({
          message: 'Sell were deleted successfully',
        });
    }catch(err){
        console.log(err)
    }
};

export const sendEmailQuotation = async (req, res) => {
  sendQuotationEmail(req.body.email);
  res.json('Hola');
};

// AKIAVHJK4GQ6BBLS6M62
