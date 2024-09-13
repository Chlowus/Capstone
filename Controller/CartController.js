import express from 'express'
const cartRouter = express.Router()

import { fetchCarts, fetchuserCart, fetchaddUserCart, fetchupdateUserCart, deleteCart, deleteItem }from '../model/Carts.js'
import { verifyAToken } from '../middleware/AuthenticateUser.js'
// Cart endpoints
cartRouter.get('/',fetchCarts)
cartRouter.get('/:id/cart',fetchuserCart)
cartRouter.post('/:id/cart',verifyAToken, fetchaddUserCart)
cartRouter.patch('/:id/cart/:product_ID',fetchupdateUserCart)
cartRouter.delete('/:id/cart',deleteCart)
cartRouter.delete('/:id/cart/:product_ID',deleteItem)

export default cartRouter