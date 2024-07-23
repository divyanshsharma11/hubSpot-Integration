const axios = require('axios');
const { node_hubspot_access_token } = require('../config/config');

const hubspotApi = axios.create({
  baseURL: 'https://api.hubapi.com',
  headers: { Authorization: `Bearer ${node_hubspot_access_token}` },
});

const addContactToHubspot = async (contact) => {
  const response = await hubspotApi.post('/contacts/v1/contact', {
    properties: [
      { property: 'firstName', value: contact.firstName },
      { property: 'lastName', value: contact.lastName },
      { property: 'email', value: contact.email },
      { property: 'phone', value: contact.phone },
    ],
  });
  return response.data;
};

const addNoteToContact = async (contactId, note) => {
  await hubspotApi.post(`/engagements/v1/engagements`, {
    engagement: { active: true, type: 'NOTE' },
    associations: { contactIds: [contactId] },
    metadata: { body: note },
  });
};

module.exports = { addContactToHubspot, addNoteToContact };
