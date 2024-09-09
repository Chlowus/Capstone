import express from 'express'
import bodyParser from 'body-parser'
import { carts, users } from '../model/index.js'
import { Carts } from '../model/Carts.js'


const userRouter = express.Router()
userRouter.use(bodyParser.json())

// User endpoints
userRouter.get('/', (req, res) => {
    users.fetchUsers(req, res)
})
userRouter.get('/singleuser/:id', (req, res) => {
    users.fetchUser(req, res)
})
userRouter.post('/register', (req, res) => {
    users.registerUser(req, res)
})
userRouter.patch('/:id', (req, res) => {
    users.updateUser(req, res)
})
userRouter.delete('/:id', (req, res) => {
    users.deleteUser(req, res)
})
userRouter.post('/login', (req, res) => {
    users.login(req, res)
})
// Cart endpoints
userRouter.get('/carts', (req, res) => {
    carts.fetchCarts(req, res)
})
userRouter.get('/:id/cart', (req, res) =>{
    carts.fetchuserCart(req, res)
})
userRouter.post('/:id/cart', (req, res) =>{
    carts.fetchaddUserCart(req, res)
})
userRouter.patch('/:id/cart/:prodID', (req, res) =>{
    carts.fetchupdateUserCart(req, res)
})
userRouter.delete('/:id/cart', (req, res) => {
    carts.deleteCart(req, res)
})
userRouter.delete('/:id/cart/:prodID',(req, res) =>{
    carts.deleteItem(req,res)
})



export {
    express,
    userRouter
}















