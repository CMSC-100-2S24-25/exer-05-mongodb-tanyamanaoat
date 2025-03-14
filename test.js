import needle from 'needle';

const BASE_URL = 'http://localhost:3000'; // Modify port if necessary

// Helper function to make requests
const sendRequest = async (method, endpoint, data = null) => {
    try {
        const response = await needle(method, `${BASE_URL}${endpoint}`, data);
        console.log(`${method.toUpperCase()} ${endpoint}:`, response.body);
    } catch (error) {
        console.error(`Error in ${method.toUpperCase()} ${endpoint}:`, error);
    }
};

// Save multiple students
const saveStudents = async () => {
    const students = [
        { stdnum: "1234567890", fname: "Mary Jane", lname: "Watson", age: 20 },
        { stdnum: '1431431431', fname: 'Ayaka', lname: 'Kamisato', age: 17 },
        { stdnum: '6910232001', fname: 'Ayato', lname: 'Kamisato', age: 19 },
        { stdnum: '4444444444', fname: 'Kazuha', lname: 'Kaedehara', age: 18 },
        { stdnum: '0987654321', fname: 'Ei', lname: 'Raiden', age: 20 }
    ];

    for (const student of students) {
        await sendRequest('post', '/save-student', student);
    }
};

// Update student details
const updateStudent = async () => {
    await sendRequest('post', '/update', { fname: 'Mary Jane', lname: 'Parker' });
};

// Remove a single student
const removeStudent = async () => {
    await sendRequest('post', '/remove-user', { stdnum: '1234567890' });
};

// Remove all students
const removeAllStudents = async () => {
    await sendRequest('post', '/remove-all-user');
};

// Fetch a specific student
const fetchStudent = async () => {
    await sendRequest('get', '/user?stdnum=6910232001');
};

// Fetch all students
const fetchAllStudents = async () => {
    await sendRequest('get', '/members');
};

// Execute test functions in sequence
const runTests = async () => {
    await saveStudents();
    await updateStudent();
    await removeStudent();
    await fetchStudent();
    await fetchAllStudents();
    await removeAllStudents();
};

runTests().catch(console.error);
