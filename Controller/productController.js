import express from 'express'

import {
    fetchProducts,
    recentProducts,
    fetchProduct,
    addProduct,
    updateProduct,
    deleteProduct
} from '../model/Products.js'

import { verifyAToken } from '../middleware/AuthenticateUser.js'

const productRouter = express.Router()

productRouter.get('/', verifyAToken,fetchProducts)
productRouter.get('/:id', verifyAToken, fetchProduct)
productRouter.post('/add', verifyAToken,  addProduct)
productRouter.patch('/:id', verifyAToken, updateProduct)
productRouter.delete('/:id', verifyAToken, deleteProduct)

export default productRouter





