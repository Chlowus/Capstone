import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import productRouter from './routes/productsRouter.js'
import usersRouter from './routes/usersRouter.js'

config()
const app = express();
const port =process.env.PORT || 7777

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Welcome to the API. Use /users to get a list of users, /user/:id to get a specific user, /register to create a new user, and /products to get a list of products.');
});

// app.use('/products', productRouter);

// app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})