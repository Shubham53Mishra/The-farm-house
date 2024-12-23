const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes'); // Import the product routes
const inquiryRoutes = require('./routes/inquiryRoutes');  // Import the inquiry routes

dotenv.config();
connectDB();  // Connect to the database

const app = express();
app.use(express.json());  // Middleware to parse JSON

// Register the routes
app.use('/api/products', productRoutes);  // This sets up the POST route for /api/products
app.use('/api/inquiries', inquiryRoutes);  // Define the inquiries route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
