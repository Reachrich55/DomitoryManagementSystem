import axios from 'axios';

const API_URL = 'http://localhost:3000/dormitories';

export const getDormitories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching dormitories:', error);
        throw error;
    }
};

export const addDormitory = async (dormitory) => {
    try {
        const response = await axios.post(API_URL, dormitory);
        return response.data;
    } catch (error) {
        console.error('Error adding dormitory:', error);
        throw error;
    }
};

export const updateDormitory = async (id, dormitory) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, dormitory);
        return response.data;
    } catch (error) {
        console.error('Error updating dormitory:', error);
        throw error;
    }
};

export const deleteDormitory = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting dormitory:', error);
        throw error;
    }
};
