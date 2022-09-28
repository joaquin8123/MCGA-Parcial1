const productMessages = {
    GET_PRODUCTS_SUCCESS: 'Products successfully obtained.',
    GET_PRODUCTS_ERROR: `There was an error getting the products.`,
    GET_PRODUCT_UNEXIST: 'The product does not exist',
    GET_PRODUCT_SUCCESS: 'Product successfully obtained.',
    CREATE_PRODUCT_SUCCESS: 'Product created successfully.',
    CREATE_PRODUCT_ERROR: 'An error occurred while creating the product',
    UPDATE_PRODUCT_ERROR: 'An error occurred while updating the product',
    UPDATE_PRODUCT_SUCCESS: 'the product was successfully upgraded',
    DELETE_PRODUCT_SUCCESS: 'the product was successfully deleted',
    DELETE_PRODUCT_ERROR: 'An error occurred while deleted the product'
};

const sendResponse = (res, msgKey, code, data = {}, error = false) => {
    return res.status(code).json({
        msg: productMessages[msgKey],
        data: data,
        error
    });
};

module.exports = sendResponse;