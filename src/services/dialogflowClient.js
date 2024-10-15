const dialogflow = require('dialogflow');
const uuid = require('uuid');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

const serviceAccountPath = 'C:\Users\Gut\meu-projeto\dotted-virtue-260504-03e44821b480.json';

async function detectIntent(projectId, sessionId, query, languageCode) {
  const sessionClient = new dialogflow.SessionsClient({
    keyFilename: serviceAccountPath, // Referência ao arquivo JSON
  });

  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  return responses[0].queryResult.fulfillmentText;
}

app.post('/api/message', async (req, res) => {
  const { message } = req.body;
  console.log("Mensagem recebida:", message); 
  const projectId = 'dotted-virtue-260504'; 
  const sessionId = uuid.v4();
  const languageCode = 'pt-BR';

  try {
    const response = await detectIntent(projectId, sessionId, message, languageCode);
    res.json({ reply: response });
  } catch (error) {
    console.error("Erro ao processar a mensagem:", error);
    res.status(500).send('Erro ao processar a mensagem com o Dialogflow');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
