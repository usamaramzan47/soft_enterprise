const express = require('express');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//middlewares
app.use(express.json());
app.use(cors()); // use to allow communicate with frontend

// Connect to the database
connectDB();

// routes redirect
app.use('/auth', authRoutes);
app.use('/products', productRoutes);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});