import mongoose from 'mongoose';

// MongoDB connection setup
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connection successful');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit process on failure
    }
};
connectDB();

// Define Student Schema
const studentSchema = new mongoose.Schema({
    stdnum: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    age: { type: Number, required: true }
}, { collection: 'studentData' });

// Create and export Student model
const Student = mongoose.model('Student', studentSchema);
export default Student;
