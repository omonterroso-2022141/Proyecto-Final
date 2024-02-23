'use strict'

import { Router } from 'express'
import { saveProduct, listProduct, deleteProduct, updateProduct } from './product.controller.js'
import { validateJwt} from '../../middlewares/validate-jwt.js'

const api = Router()

api.post('/saveProduct', saveProduct)
api.put('/updateProduct/:id', updateProduct)
api.delete('/deleteProduct/:id', deleteProduct)
api.get('/listProduct', [validateJwt], listProduct)

export default api