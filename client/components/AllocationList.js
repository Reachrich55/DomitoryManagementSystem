import React, { useState, useEffect } from 'react';
import { getAllocations, deleteAllocation } from '../services/allocationService';

const AllocationList = () => {
    const [allocations, setAllocations] = useState([]);

    useEffect(() => {
        const fetchAllocations = async () => {
            const result = await getAllocations();
            setAllocations(result);
        };
        fetchAllocations();
    }, []);

    const handleDelete = async (id) => {
        await deleteAllocation(id);
        setAllocations(allocations.filter(allocation => allocation._id !== id));
    };

    return (
        <div>
            <h2>Allocations</h2>
            <ul>
                {allocations.map(allocation => (
                    <li key={allocation._id}>
                        Student ID: {allocation.studentId} - Dormitory ID: {allocation.dormitoryId}
                        <button onClick={() => handleDelete(allocation._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllocationList;
