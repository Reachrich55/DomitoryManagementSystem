import React, { useState } from 'react';
import { createStudent } from '../services/studentService';

const AddStudent = () => {
    const [student, setStudent] = useState({
        name: '',
        studentId: '',
        gender: '',
        contact: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createStudent(student);
        setStudent({ name: '', studentId: '', gender: '', contact: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="studentId" value={student.studentId} onChange={handleChange} placeholder="Student ID" required />
            <input type="text" name="gender" value={student.gender} onChange={handleChange} placeholder="Gender" required />
            <input type="text" name="contact" value={student.contact} onChange={handleChange} placeholder="Contact" required />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudent;
