// routes/webhook.js
const express = require('express');
const router = express.Router();
const { syncHubspotToMongo } = require('../controller/controllerContact');

router.post('/hubspotWebhook', async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const webhookData = req.body;

    console.log('Webhook Data:', JSON.stringify(webhookData, null, 2)); // Log the incoming data

    // Check if the webhook data contains contact information
    if (webhookData) {
      await syncHubspotToMongo(webhookData);
    } else {
      console.log('Webhook data does not contain contact information.');
    }

    res.status(200).send('Webhook received and processed.');
  } catch (error) {
    console.error('Error processing webhook:', error.message); // Log errors
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
