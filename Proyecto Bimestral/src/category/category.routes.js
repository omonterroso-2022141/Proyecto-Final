'use strict'

import { Router } from 'express'
import {saveCategory, listCategory, updateCategory, deleteCategory} from './category.controller.js'
import { validateJwt } from '../../middlewares/validate-jwt.js'

const api = Router()
api.post('/saveCategory', saveCategory)
api.put('/updateCategory/:id', updateCategory)
api.delete('/deleteCategory/:id', deleteCategory)
api.get('/listCategory', [validateJwt],listCategory)

export default api