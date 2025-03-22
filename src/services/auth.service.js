import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const registerUser = async (userData) => {
  const existingUsers = await axios.get(`${API_URL}/users?email=${userData.email}`);
  
  if (existingUsers.data.length > 0) {
    throw new Error('User already exists');
  }
  
  const response = await axios.post(`${API_URL}/users`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const { email, password } = credentials;
  const response = await axios.get(`${API_URL}/users?email=${email}&password=${password}`);
  
  if (response.data.length === 0) {
    throw new Error('Invalid credentials');
  }
  
  return response.data[0];
};