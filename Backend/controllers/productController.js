const productModel = require('../models/productModel');

exports.getProducts = async (req,res,next) => {
    const products = await productModel.find({});
    res.json({
        success: true,
        products
    })
}

exports.getSingleProduct = async (req,res,next) => {
   try{
    const product = await productModel.findById(req.params.id);
    res.json({
        success: true,
        product
    })
   }
   catch(error){
    res.status(404).json({
        success: false,
        message:'unable to get product with that id'
    })
   }
   
};





// get admin products  - api/v1/admin/products

// exports.getAdminProducts = catchAsyncError(async (req, res, next) =>{
//     const products = await Product.find();
//     res.status(200).send({
//         success: true,
//         products
//     })
// });