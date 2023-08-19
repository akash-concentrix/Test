// api/auth.js
import axios from 'axios';

const API_BASE_URL = 'https://naveenslog.pythonanywhere.com';

export const login = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/auth/jwt/create/`, data);
  return response.data;
};
