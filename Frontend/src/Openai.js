// Openai.js
const { Configuration, OpenAIApi } = require("openai");

// Use the correct way to access environment variables
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPEN_AI, // Ensure this is set in your .env file
});

const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAi(message) {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return res.data.choices[0].text.trim(); // Trim whitespace from the response
}
