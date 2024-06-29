// Import the Ollama library
const { Ollama } = require('ollama');

// Create an instance of Ollama
const ollama = new Ollama({ host: 'http://localhost:11434' });

// Define a simple async function to test the chat method
async function testChat() {
  try {
    const response = await ollama.chat({
      model: 'llama2',
      messages: [{ role: 'user', content: 'Why is the sky blue?' }],
    });
    console.log(response.message.content);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the test function
testChat();