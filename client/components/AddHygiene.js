import React, { useState } from 'react';
import { addHygieneRecord } from '../services/hygieneService';

const AddHygiene = () => {
    const [dormitoryId, setDormitoryId] = useState('');
    const [checkDate, setCheckDate] = useState('');
    const [score, setScore] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newHygieneRecord = { dormitoryId, checkDate, score, remarks };
        await addHygieneRecord(newHygieneRecord);
        setDormitoryId('');
        setCheckDate('');
        setScore('');
        setRemarks('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Hygiene Record</h2>
            <label>
                Dormitory ID:
                <input type="text" value={dormitoryId} onChange={(e) => setDormitoryId(e.target.value)} required />
            </label>
            <br />
            <label>
                Check Date:
                <input type="date" value={checkDate} onChange={(e) => setCheckDate(e.target.value)} required />
            </label>
            <br />
            <label>
                Score:
                <input type="number" value={score} onChange={(e) => setScore(e.target.value)} required />
            </label>
            <br />
            <label>
                Remarks:
                <input type="text" value={remarks} onChange={(e) => setRemarks(e.target.value)} />
            </label>
            <br />
            <button type="submit">Add Hygiene Record</button>
        </form>
    );
};

export default AddHygiene;
