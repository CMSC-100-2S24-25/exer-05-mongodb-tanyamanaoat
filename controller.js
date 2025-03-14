import Student from './student.js';

// Add a new student
export const saveStudent = async (req, res) => {
    try {
        const studentData = req.body;
        const createdStudent = await Student.create(studentData);
        res.json({ inserted: !!createdStudent });
    } catch (error) {
        res.json({ inserted: false });
    }
};

// Modify a student's last name
export const updateStudent = async (req, res) => {
    try {
        const { fname, lname } = req.body;
        const updateResponse = await Student.updateOne(
            { fname },
            { $set: { lname } } 
        );
        res.json({ updated: updateResponse.modifiedCount > 0 });
    } catch (error) {
        res.json({ updated: false });
    }
};

// Delete a specific student by student number
export const removeStudent = async (req, res) => {
    try {
        const { stdnum } = req.body;
        const deletionResponse = await Student.deleteOne({ stdnum });
        res.json({ deleted: deletionResponse.deletedCount > 0 }); 
    } catch (error) {
        res.json({ deleted: false });
    }
};


// Delete all student records
export const removeAll = async (req, res) => {
    try {
        const deletionResponse = await Student.deleteMany();
        res.json({ deleted: deletionResponse.deletedCount > 0 }); 
    } catch (error) {
        res.json({ deleted: false });
    }
};


// Retrieve a student's details
export const getStudent = async (req, res) => {
    try {
        const student = await Student.find({ stdnum: req.query.stdnum });
        res.json(student); // Always return an array, even if empty
    } catch (error) {
        res.json([]);
    }
};


// Retrieve all students
export const getAll = async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.json(allStudents);
    } catch (error) {
        res.json([]);
    }
};