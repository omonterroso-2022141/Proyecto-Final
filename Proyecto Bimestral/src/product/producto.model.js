'use strict'

import { Schema, model } from 'mongoose'

const productSchema = Schema({
    nameProduct: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
})

export default model('product', productSchema)