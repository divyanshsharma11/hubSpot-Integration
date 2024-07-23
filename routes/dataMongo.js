const express = require('express');
const { createContact } = require('../controller/controllerContact');

const router = express.Router();

router.post('/contacts', createContact);

module.exports = router;
