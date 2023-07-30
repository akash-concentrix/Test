import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const fetchSessiondData = async () => {
    const response = await axios.get(`${API_BASE_URL}/auth/users/`);
    return response.data;
};