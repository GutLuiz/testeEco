import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('https://localhost:7013/api/v1/register', userData);
    return response.data; 
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error; 
  }
};
