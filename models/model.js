const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone:String,
    hubspotContactId: String
});

const Contact = mongoose.model('userContacts', contactSchema);

module.exports = Contact;
