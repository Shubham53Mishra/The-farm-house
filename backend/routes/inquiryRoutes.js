const express = require('express');
const bodyParser = require('body-parser');
const Inquiry = require('../models/Inquiry');
const router = express.Router();

router.use(bodyParser.json()); // Middleware to parse incoming JSON data

router.post('/', async (req, res) => {
    const { name, email, mobile, message, purpose } = req.body;

    // Log incoming data
    console.log('Received data:', req.body);

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    try {
        const inquiry = new Inquiry({ name, email, mobile, message, purpose });
        const createdInquiry = await inquiry.save();
        console.log('Inquiry saved:', createdInquiry);  // Log for debugging
        res.status(201).json(createdInquiry);  // Respond with the saved inquiry
    } catch (error) {
        console.error('Error saving inquiry:', error);  // Log error for debugging
        res.status(500).json({ message: 'Error submitting inquiry' });
    }
});

module.exports = router;
