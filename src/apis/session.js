import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const fetchSessionData = async () => {
    try {
        const cachedToken = JSON.parse(localStorage.getItem('token'));
        const config = {
            headers: {
                Authorization: `Bearer ${cachedToken?.access}`,
            },
        };
        const response = await axios.get(`${API_BASE_URL}/auth/users/me/`, config);
        return response.data;
    } catch (error) {
        window.location.href = "/"
        throw error;
    }
};