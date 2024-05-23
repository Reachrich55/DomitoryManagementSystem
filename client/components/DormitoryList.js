import React, { useState, useEffect } from 'react';
import { getDormitories, deleteDormitory } from '../services/dormitoryService';

const DormitoryList = () => {
    const [dormitories, setDormitories] = useState([]);

    useEffect(() => {
        const fetchDormitories = async () => {
            const result = await getDormitories();
            setDormitories(result);
        };
        fetchDormitories();
    }, []);

    const handleDelete = async (id) => {
        await deleteDormitory(id);
        setDormitories(dormitories.filter(dorm => dorm._id !== id));
    };

    return (
        <div>
            <h2>Dormitories</h2>
            <ul>
                {dormitories.map(dorm => (
                    <li key={dorm._id}>
                        {dorm.building} - {dorm.roomNumber} ({dorm.bedCount} beds)
                        <button onClick={() => handleDelete(dorm._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DormitoryList;
