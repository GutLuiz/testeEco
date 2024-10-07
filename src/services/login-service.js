import axios from "axios";

export const loginUser = async (userData) => {
  try {
    const response = await axios.post('https://localhost:7013/api/v1/login', userData);
    return response.data; 
  } catch (error) {
    
    if (error.response) {
      throw new Error(error.response.data.message); 
    } else {
      throw new Error("Erro ao conectar com o servidor."); 
    }
  }
};
