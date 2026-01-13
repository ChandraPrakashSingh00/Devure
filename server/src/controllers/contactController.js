const Contact = require("../models/contact");

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    const contact = await Contact.create({ name, email, phone, service, message });
    res.status(201).json({ message: "Message sent successfully", data: contact });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { submitContactForm };
