import axios from 'axios';

const API_URL = 'http://localhost:3000/hygiene';

export const getHygieneRecords = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching hygiene records:', error);
        throw error;
    }
};

export const addHygieneRecord = async (record) => {
    try {
        const response = await axios.post(API_URL, record);
        return response.data;
    } catch (error) {
        console.error('Error adding hygiene record:', error);
        throw error;
    }
};

export const updateHygieneRecord = async (id, record) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, record);
        return response.data;
    } catch (error) {
        console.error('Error updating hygiene record:', error);
        throw error;
    }
};

export const deleteHygieneRecord = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting hygiene record:', error);
        throw error;
    }
};
