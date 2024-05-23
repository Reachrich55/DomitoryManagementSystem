import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/studentService';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await getStudents();
            setStudents(response.data);
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map(student => (
                    <li key={student._id}>{student.name} - {student.studentId}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
