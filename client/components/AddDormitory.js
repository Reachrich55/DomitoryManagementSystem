import React, { useState } from 'react';
import { addDormitory } from '../services/dormitoryService';

const AddDormitory = () => {
    const [building, setBuilding] = useState('');
    const [floor, setFloor] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [bedCount, setBedCount] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newDormitory = { building, floor, roomNumber, bedCount };
        await addDormitory(newDormitory);
        setBuilding('');
        setFloor('');
        setRoomNumber('');
        setBedCount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Dormitory</h2>
            <label>
                Building:
                <input type="text" value={building} onChange={(e) => setBuilding(e.target.value)} required />
            </label>
            <br />
            <label>
                Floor:
                <input type="text" value={floor} onChange={(e) => setFloor(e.target.value)} required />
            </label>
            <br />
            <label>
                Room Number:
                <input type="text" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} required />
            </label>
            <br />
            <label>
                Bed Count:
                <input type="number" value={bedCount} onChange={(e) => setBedCount(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Add Dormitory</button>
        </form>
    );
};

export default AddDormitory
