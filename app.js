const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/db');
const webhookRouter = require('./routes/dataHubspot');
const contactRoutes = require('./routes/dataMongo');

const app = express();
app.use(bodyParser.json());



// Connect to MongoDB
connectDB();

// Use Routes
app.use('/api', webhookRouter);
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});