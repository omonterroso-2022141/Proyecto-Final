'use strict'

import { checkUpdate } from '../../utils/validator.js'
import Product from './producto.model.js'

export const saveProduct = async(req, res) =>{
    try {
        let data = req.body
        let product = new Product(data)
        await product.save()

        return res.send({message: 'Product saved succesfully'})
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error saving Product', err})
        
    }
}

export const listProduct = async(req, res) =>{
    try {

        let products = await Product.find()
        return res.send({ products })
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error getting products'})
    }
}

export const updateProduct = async(req, res) => {
    try {

        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if (!update) return res.status(400).send({ message: 'Have sumbitted some data that cannot be updated or missing data'})
        let updateProduct = await Product.findOneAndUpdate(
            
            { _id: id},
            data,
            { new: true}

            )
            if(!updateProduct) return res.status(401).send({message: 'Product not found and not updated'})
            return res.send({message: 'Update Product', updateProduct})
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error updating product'})
        
    }
}

export const deleteProduct = async (req, res) =>{
    try {

        let { id } = req.params
        let deletedProduct = await Product.findOneAndDelete({ _id: id})
        if(!deletedProduct) return res.status(404).send({message: 'Product not found and not delete'})
        return res.send({message: 'Product delete successfully'})
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting Product'})
        
    }
}