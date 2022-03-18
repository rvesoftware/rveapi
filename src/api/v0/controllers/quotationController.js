import Quotation from '../models/Quotation.js';
import getPagination from '../libs/getPagination.js';
import { sendQuotationEmail } from '../services/emailService.js';

export const findAllQuotations = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);

    const quotations = await Quotation.find({});
    res.json({
      totalItems: quotations.totalDocs,
      quotations: quotations,
      totalPages: quotations.totalPages,
      currentPage: quotations.page - 1,
    });
  } catch (error) {
    res.status(500).json({
      message: error.meesage || 'Something goes wrong retrieving the users',
    });
  }
};

export const createQuotation = async (req, res) => {
  const newQuotation = new Quotation({
    clientName: req.body.clientName,
    price: req.body.price,
    code: req.body.code,
    note: req.body.note,
    items: req.body.items,
  });
  console.log(newQuotation);

  const quotationCreated = await newQuotation.save();
  res.json(quotationCreated);
};

export const findOneQuotation = async (req, res) => {
  const quotation = await Quotation.findById(req.params.id);
  res.json(quotation);
};

export const deleteQuotation = async (req, res) => {
  const quotation = await Quotation.findByIdAndDelete(req.params.id);
  res.json({
    message: 'Quotation were deleted successfully',
  });
};

export const sendEmailQuotation = async (req, res) => {
  sendQuotationEmail(req.body.email);
  res.json('Hola');
};

// AKIAVHJK4GQ6BBLS6M62
