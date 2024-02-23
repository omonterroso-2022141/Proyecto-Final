'use strict'
import { Schema, model } from 'mongoose'

const categorySchema = Schema({
    nameCategory: {
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    }
})

export default model('category', categorySchema)