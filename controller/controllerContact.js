const Contact = require('../models/model');
const { addContactToHubspot, addNoteToContact } = require('../utils/hubspot');
const { sendEmail } = require('../utils/email');

const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    const newContact = new Contact({ firstName, lastName, email, phone });
    const savedContact = await newContact.save();
    const hubspotContact = await addContactToHubspot(savedContact);

    savedContact.hubspotId = hubspotContact.vid;
    await savedContact.save();

    await sendEmail(email, 'Welcome!', 'Thank you for joining us!');

    if (email.endsWith('@vodex.ai')) {
      await addNoteToContact(hubspotContact.vid, 'Contact is from vodex.ai');
    }

    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const syncHubspotToMongo = async (hubspotContact) => {
  const { firstName, lastName, email, phone, vid } = hubspotContact;

  // Check if necessary properties are present
  if (!firstName || !lastName || !email) {
    console.error('Missing required contact properties:', { firstName, lastName, email });
    return;
  }

  const contact = new Contact({
    firstName,
    lastName,
    email,
    phone,
    hubspotId: vid,
  });

  try {
    await contact.save();
    console.log('Contact saved to MongoDB:', contact);
    await sendEmail(email, 'Welcome!', 'Thank you for joining us!');
  } catch (error) {
    console.error('Error saving contact to MongoDB:', error);
  }
};


module.exports = { createContact, syncHubspotToMongo };
