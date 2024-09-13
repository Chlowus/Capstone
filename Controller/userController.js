import express from 'express'
import {
    fetchUsers,
    fetchUser,
    registerUser,
    updateUser,
    deleteUser,
    login,
    fetchUserhehe
} from '../model/Users.js'
import { verifyAToken } from '../middleware/AuthenticateUser.js'


const userRouter = express.Router()

// User endpoints
userRouter.get('/',fetchUsers)
userRouter.get('/singleUser/:id',  fetchUser)
userRouter.get('/single',verifyAToken,  fetchUserhehe)
userRouter.post('/register',  registerUser)
userRouter.patch('/:id', verifyAToken, updateUser)
userRouter.delete('/:id', verifyAToken, deleteUser)
userRouter.post('/login',  login)




export default  userRouter
















