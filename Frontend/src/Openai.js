import { Configuration, OpenAiApi } from "openai";

const configuration = new Configuration({ apiKey: import.meta.VITE_OPEN_AI });

const openai = new OpenAiApi(configuration);
