import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection setup
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connection established');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit if connection fails
    }
};
connectDB();

// Apply router for handling requests
app.use('/', router);

// Define server port and start listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
