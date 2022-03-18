import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  console.log("ENTRO");
  try {
    const { name, category, brand, image, price, wattage } = req.body;

    let newProduct = await Product({
      name, category, brand, image, price, status:false, wattage
    });

    await newProduct.save();

    res.send(newProduct);
  } catch (err) {
    console.log(err);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { name, category, brand, image, price, status, wattage } = req.body;

    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (product) {
      product.name = name;
      product.category = category;
      product.brand = brand;
      product.image = image;
      product.price = price;
      product.status = status;
      product.wattage = wattage;

      const updatedProduct = await product.save();
      res.send(updatedProduct);
    }
  } catch (err) {
    console.log(err);
  }
};


export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.json({
      message: 'Product were deleted successfully'
  });
};


