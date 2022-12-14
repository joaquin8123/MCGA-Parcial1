const { mongoose, Schema } = require('mongoose');

const ProductSchema = new Schema(
    {
        _id:{
            type: String,
            required: 'id is required.'
        },
        name: {
            type: String,
            required: 'name is required.',
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            required: 'Price is required.'
        },
        stock: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Products', ProductSchema);