const mongoose = require('mongoose');
const {mongo_username,mongo_db_pass,mongo_table} = require('../config/config');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${mongo_username}:${mongo_db_pass}@cluster0.axhumvh.mongodb.net/${mongo_table}?retryWrites=true&w=majority&appName=Cluster0`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
