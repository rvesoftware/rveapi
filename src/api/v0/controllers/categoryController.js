import Category from "../models/Category.js";
import getPagination from '../libs/getPagination.js'

export const findAllCategories = async(req, res) => {
    try
    {
        const {size, page} = req.query;
        const {limit, offset} = getPagination(page, size);

        const categories = await Category.find({});
        res.json({
            // totalItems: clients.totalDocs,
            categories: categories,
            // totalPages: clients.totalPages,
            // currentPage: clients.page - 1
        })
    }catch(error){
        res.status(500).json({
            message: error.meesage || 'Something goes wrong retrieving the users'
        })
    }
    
}

export const createCategory = async(req, res) =>{
    const newCategory = new Category({name: req.body.name})
    const categoryCreated = await newCategory.save();
    res.json(categoryCreated);
}

// export const findOneUser = async(req, res) =>{
//     const user = await User.findById(req.params.id);
//     res.json(user);
// }

export const deleteCategory = async(req, res) =>{
    const category = await Category.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Product were deleted successfully'
    });
}
