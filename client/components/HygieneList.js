import React, { useState, useEffect } from 'react';
import { getHygieneRecords, deleteHygieneRecord } from '../services/hygieneService';

const HygieneList = () => {
    const [hygieneRecords, setHygieneRecords] = useState([]);

    useEffect(() => {
        const fetchHygieneRecords = async () => {
            const result = await getHygieneRecords();
            setHygieneRecords(result);
        };
        fetchHygieneRecords();
    }, []);

    const handleDelete = async (id) => {
        await deleteHygieneRecord(id);
        setHygieneRecords(hygieneRecords.filter(record => record._id !== id));
    };

    return (
        <div>
            <h2>Hygiene Records</h2>
            <ul>
                {hygieneRecords.map(record => (
                    <li key={record._id}>
                        Dormitory ID: {record.dormitoryId} - Score: {record.score}
                        <button onClick={() => handleDelete(record._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HygieneList;
