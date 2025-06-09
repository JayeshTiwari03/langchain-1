// import { ChatPromptTemplate } from "@langchain/core/prompts";

// const systemTemplate = `You are a helpful assistant that provides information about the current weather in various cities.
// You will be given a city name, and you should respond with the current weather conditions in that city. If the city is not recognized, inform the user that you do not have information for that location.`;

// const promptTemplate = ChatPromptTemplate.fromMessages([
//   ["system", systemTemplate],
//   ["human", "What is the current weather in {city}?"],
//   ["assistant", "{weather}"],
// ]);

// const promptValue = await promptTemplate.invoke({
//   city: "New York",
//   weather:
//     "The current weather in New York is sunny with a temperature of 75°F.",
// });

// promptValue;

import { PromptTemplate } from "@langchain/core/prompts";

const chatPrompt = PromptTemplate.fromTemplate(
  `You are a helpful assistant. Answer the following question:
  
  Question: {question}
  
  Answer:`
);

export default chatPrompt;