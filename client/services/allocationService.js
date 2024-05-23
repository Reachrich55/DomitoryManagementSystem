import axios from 'axios';

const API_URL = 'http://localhost:3000/allocations';

export const getAllocations = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching allocations:', error);
        throw error;
    }
};

export const addAllocation = async (allocation) => {
    try {
        const response = await axios.post(API_URL, allocation);
        return response.data;
    } catch (error) {
        console.error('Error adding allocation:', error);
        throw error;
    }
};

export const updateAllocation = async (id, allocation) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, allocation);
        return response.data;
    } catch (error) {
        console.error('Error updating allocation:', error);
        throw error;
    }
};

export const deleteAllocation = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting allocation:', error);
        throw error;
    }
};
