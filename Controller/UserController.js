import express from 'express'
import {
    fetchUsers,
    fetchUser,
    registerUser,
    updateUser,
    deleteUser,
    login
} from '../model/Users.js'


const userRouter = express.Router()

// User endpoints
userRouter.get('/',fetchUsers)
userRouter.get('/singleUser/:id',  fetchUser)
userRouter.post('/register',  registerUser)
userRouter.patch('/:id',  updateUser)
userRouter.delete('/:id',  deleteUser)
userRouter.post('/login',  login)




export {
    userRouter
}















