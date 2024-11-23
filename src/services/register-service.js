import axios from 'axios'; //fazendo a importação do axios

export const registerUser = async (userData) => { // A função "reigsterUser" esta sendo definida com uma função assincrona e esta sendo exportada para que possa ser usadas em outros arquivos
  try {
    const response = await axios.post('https://localhost:7013/api/v1/register', userData); //Fazendo a requisição POST para a url especificada. O resultado da requisiçãp é armazenado na variavel response.
    return response.data;  // A função retorna apenas os dados da resposta.
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error; 
  }
};
