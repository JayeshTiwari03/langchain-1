import "dotenv/config";
import { ChatOpenAI } from "@langchain/openai";
import chatPrompt from "./promptTemplate.js";


async function runLLM() {
  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: process.env.OPENAI_MODEL,
  });

  const question = "What is LangChain and how does it help with LLMs?";

  const formattedPrompt = await chatPrompt.format({ question });

  const response = await model.call([
    { role: "user", content: formattedPrompt },
  ]);

  console.log("🧠 Response:", response.text);
}

runLLM();
