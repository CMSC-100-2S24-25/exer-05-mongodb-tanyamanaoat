import Student from './student.js';

// Add a new student
export const saveStudent = async (req, res) => {
    try {
        const studentData = req.body;
        const createdStudent = await Student.create(studentData);
        res.json({ success: !!createdStudent });
    } catch (error) {
        res.json({ success: false });
    }
};

// Modify a student's last name
export const updateStudent = async (req, res) => {
    try {
        const { fname, lname } = req.body;
        const updateResponse = await Student.findOneAndUpdate(
            { fname },
            { lname },
            { new: true }
        );
        res.json({ success: !!updateResponse });
    } catch (error) {
        res.json({ success: false });
    }
};

// Delete a specific student by student number
export const removeStudent = async (req, res) => {
    try {
        const { stdnum } = req.body;
        const deletionResponse = await Student.findOneAndDelete({ stdnum });
        res.json({ success: !!deletionResponse });
    } catch (error) {
        res.json({ success: false });
    }
};

// Delete all student records
export const removeAll = async (req, res) => {
    try {
        const { deletedCount } = await Student.deleteMany();
        res.json({ success: deletedCount > 0 });
    } catch (error) {
        res.json({ success: false });
    }
};

// Retrieve a student's details
export const getStudent = async (req, res) => {
    try {
        const student = await Student.findOne({ stdnum: req.query.stdnum });
        res.json(student || {});
    } catch (error) {
        res.json({});
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