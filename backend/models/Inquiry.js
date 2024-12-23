const mongoose = require('mongoose');

const inquirySchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: false }, // mobile is optional
  message: { type: String, required: true },
  purpose: { type: String, required: false } // optional
});

module.exports = mongoose.model('Inquiry', inquirySchema);
