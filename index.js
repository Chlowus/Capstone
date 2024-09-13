import express from 'express';
import cors from 'cors';
import userRouter from './Controller/userController.js';
import productRouter from './Controller/productController.js';
import cartRouter from './Controller/CartController.js';

// Create an express app
const app = express();
const port = +process.env.PORT || 4000;
app.use(express.static('static'));

// Middleware
app.use(
    cors({
        origin: '*',  // Adjust this as needed for security (e.g., specify allowed origins)
        credentials: true
    })
);
app.use(express.json());  // Make sure to include express.json() if you're handling JSON requests
app.use(express.urlencoded({ extended: true }));  // Make sure to include this if you're handling form submissions

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/carts', cartRouter);

app.use(express.static('static'));

// Optional: Serve a static HTML file if requested
// app.get('^/$|/GameVaults', (req, res) => {
//     res.status(200).sendFile(path.resolve('./static/html/index.html'));
// });

app.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        msg: 'Resource not found'
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});