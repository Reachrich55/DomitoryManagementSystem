import React, { useState } from 'react';
import { addAllocation } from '../services/allocationService';

const AddAllocation = () => {
    const [studentId, setStudentId] = useState('');
    const [dormitoryId, setDormitoryId] = useState('');
    const [bedNumber, setBedNumber] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newAllocation = { studentId, dormitoryId, bedNumber, startDate, endDate };
        await addAllocation(newAllocation);
        setStudentId('');
        setDormitoryId('');
        setBedNumber('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Allocation</h2>
            <label>
                Student ID:
                <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
            </label>
            <br />
            <label>
                Dormitory ID:
                <input type="text" value={dormitoryId} onChange={(e) => setDormitoryId(e.target.value)} required />
            </label>
            <br />
            <label>
                Bed Number:
                <input type="text" value={bedNumber} onChange={(e) => setBedNumber(e.target.value)} required />
            </label>
            <br />
            <label>
                Start Date:
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </label>
            <br />
            <label>
                End Date:
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Add Allocation</button>
        </form>
    );
};

export default AddAllocation;
