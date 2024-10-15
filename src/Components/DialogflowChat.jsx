import React, { useState } from "react";
import axios from "axios";
import './DialogflowChat.css';

const DialogflowChat = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso te ajudar hoje?", sender: "bot" },
  ]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputText) return;

    const newMessage = { text: inputText, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await axios.post("http://localhost:5000/api/message", {
        message: inputText,
      });

      const botResponse = response.data.reply;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Erro ao se comunicar com o servidor:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Erro no servidor", sender: "bot" },
      ]);
    }

    setInputText("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "bot" ? "bot" : "user"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      
      <form onSubmit={sendMessage} style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default DialogflowChat;
