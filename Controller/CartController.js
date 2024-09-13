import express from 'express'
const cartRouter = express.Router()

import { fetchCarts, fetchuserCart, fetchaddUserCart, fetchupdateUserCart, deleteCart, deleteItem }from '../model/Carts.js'
import { verifyAToken } from '../middleware/AuthenticateUser.js'
// Cart endpoints
cartRouter.get('/',verifyAToken,fetchCarts)
cartRouter.get('/:id/cart',verifyAToken,fetchuserCart)
cartRouter.post('/:id/cart',verifyAToken, fetchaddUserCart)
cartRouter.patch('/:id/cart/:product_ID',verifyAToken, fetchupdateUserCart)
cartRouter.delete('/:id/cart',verifyAToken,deleteCart)
cartRouter.delete('/:id/cart/:product_ID',verifyAToken,deleteItem)

export default cartRouter