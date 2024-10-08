import axios from 'axios';


const API_URL = 'https://localhost:7013/api/v1/agendamento'; 

export const agendarUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data; 
  } catch (error) {
    console.error('Erro ao agendar usuário:', error);
    throw error; 
  }
};