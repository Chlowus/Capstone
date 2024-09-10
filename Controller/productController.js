import express from 'express'

import {
    fetchProducts,
    recentProducts,
    fetchProduct,
    addProduct,
    updateProduct,
    deleteProduct
} from '../model/Products.js'

// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const productRouter = express.Router()

productRouter.get('/',fetchProducts)
productRouter.get('/:id',fetchProduct)
productRouter.post('/add',addProduct)
productRouter.patch('/:id',updateProduct)
productRouter.delete('/:id',deleteProduct)

export default productRouter





