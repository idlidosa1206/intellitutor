import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const ChatResponse = async (prompt) => {
  try {
    const response = await axios.post("" ,  // model to be added later
         {
        model: 'text-davinci-003',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw error; // Propagate the error to the caller
  }
};

export default ChatResponse;
