import React, { useState } from 'react';
import ChatResponse from '../Components/ChatResponse.js';

const Chat = () => {

  const [generatedResponse, setGeneratedResponse] = useState('');

  const handleClick = async () => {
    const prompt = 'Hello, how are you?';
    const response = await ChatResponse(prompt);
    setGeneratedResponse(response);
  };

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <h1>Meet Intelli - our favourite Virtual Tutor!! </h1>
      <button onClick={handleClick}>Generate Response</button>
      <div>{generatedResponse}</div>
    </div>
  );
};

export default Chat;
