const Product = require('../models/Products')
const sendResponse = require('../helper/sendResponse')

const create = async (req, res) => {
    try {
        const  { _id, name, description, price, stock } = req.body;
        const product = new Product({
            _id,
            name,
            description,
            price,
            stock
        })
        return product
            .save()
            .then((product) => {
                return sendResponse(res,'CREATE_PRODUCT_SUCCESS',201, product)
            })
            .catch((error) => {
                return sendResponse(res,'CREATE_PRODUCT_ERROR',400, error.message, true) 
            });
    } catch (error) {
        console.error(error);
        return sendResponse(res,'CREATE_PRODUCT_ERROR',500, error.message, true)
    }
};

const getAll = async (req, res) => {
    try {
        const products = await Product.find()
        .exec()
        return sendResponse(res,'GET_PRODUCTS_SUCCESS',200, products)
    } catch (error) {
        console.error(error);
        return sendResponse(res,'GET_PRODUCTS_ERROR',500, error.message, true)
    }};


const getByIdOrName = async (req, res) => {
    try {
        const productParams  = req.params.productParams
        const product = await Product.find({
            $or: [
                { name: productParams },
                { _id: productParams },
            ], 
          })
        if (!product) sendResponse(res,'GET_PRODUCT_UNEXIST',404)
        return sendResponse(res,'GET_PRODUCT_SUCCESS',200, product)
    } catch (error) {
        console.error(error);
        return sendResponse(res,'GET_PRODUCTS_ERROR',500, error.message, true)
    }
};

const edit = async(req, res) => {
    try {
        const body = req.body;
        const productId = req.params.id
        const product = await Product.findById(productId);
        const productUpdated = await Product.findByIdAndUpdate(product, body, { new: true });

        if (!productUpdated) sendResponse(res,'UPDATE_PRODUCT_ERROR', 400)
        return sendResponse(res,'UPDATE_PRODUCT_SUCCESS', 200, productUpdated)

    } catch (error) {
        console.error(error);
        return sendResponse(res,'UPDATE_PRODUCT_ERROR', 500, error.message, true)
    }
    
};

const deleteProduct = async(req, res) => {
    try {
        const productId = req.params.id
        await Product.findByIdAndDelete(productId);
        return sendResponse(res,'DELETE_PRODUCT_SUCCESS', 204, null)
    } catch (error) {
        console.error(error);
        return sendResponse(res,'DELETE_PRODUCT_ERROR', 500, error.message ,true)
    }
};

module.exports = {  
    create,
    deleteProduct,
    edit,
    getByIdOrName,
    getAll 
};