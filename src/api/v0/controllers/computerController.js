import Computer from '../models/Computer.js';

export const findAllComputers = async (req, res) => {
  try {
    const { size, page } = req.query;

    const computers = await Computer.find({});
    res.json({
      // totalItems: clients.totalDocs,
      computers: computers,
      // totalPages: clients.totalPages,
      // currentPage: clients.page - 1
    });
  } catch (error) {
    res.status(500).json({
      message: error.meesage || 'Something goes wrong retrieving the users',
    });
  }
};

export const createComputer = async (req, res) => {
  let slug = req.body.name;
  slug = slug.toLowerCase();
  slug = slug.replace(/\s+/g, '-');

  const newComputer = new Computer({
    name: req.body.name,
    slug: slug,
    specs: req.body.specs,
    price: req.body.price,
    brand: req.body.brand,
    gamer: req.body.games,
    programs: req.body.programs,
    image: req.body.image,
    description: req.body.description,
  });
  const computerCreated = await newComputer.save();
  res.json(computerCreated);
};

export const findOneComputer = async (req, res) => {
  const computer = await Computer.findById(req.params.id);
  res.json(computer);
};

export const deleteComputer = async (req, res) => {
  const computer = await Computer.findByIdAndDelete(req.params.id);
  res.json({
    message: 'Computer were deleted successfully',
  });
};