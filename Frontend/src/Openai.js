import { Configuration, OpenAiApi } from "openai";

const configuration = new Configuration({ apiKey: import.meta.VITE_OPEN_AI });

const openai = new OpenAiApi(configuration);

export async function sendMsgToOpenAi(message) {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.7,
    max_token: 256,
    top_p: 1,
    frequency_penalty: 0,
    presense_penalty: 0,
  });
  return res.data.choices[0].text;
}
