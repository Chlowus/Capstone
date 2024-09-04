import express from 'express'
import {getProducts, getProduct, insertProduct, deleteProduct, updateProduct} from '../Controller/productController.js'

const router = express.Router()

// import {verifyAToken} from '../middleware/authenticate.js'
router.post('/cart,verifyAToken,addToCart')
router.
    route('/')
        .get(getProducts)
        .post(insertProduct)
router.
    route('/:product_ID')
        .get(getProduct)
        .patch(updateProduct)
        .delete(deleteProduct)
    export default router