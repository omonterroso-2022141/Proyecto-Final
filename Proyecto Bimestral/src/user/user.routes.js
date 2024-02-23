'use strict'

import express from 'express'
import { deleteUser, register,login, updateUser } from './user.controller.js'
import { validateJwt} from '../../middlewares/validate-jwt.js'


const api = express.Router()

api.put('/updateUser/:id', [validateJwt], updateUser)
api.delete('/delete/:id', [validateJwt], deleteUser)
api.post('/register', register)
api.post('/login', login)

export default api