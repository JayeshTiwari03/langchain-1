import { openAiKey, openAiModel } from "./Endpoint.js";

// const question1 = "What is the capital of France?";

async function getOpenAIResponse(question) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAiKey}`,
    },
    body: JSON.stringify({
      model: openAiModel,
      messages: [{ role: "user", content: question }],
      max_tokens: 10,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

let question1 = "";
document.getElementById("submit-button").addEventListener("click", async () => {
  question1 = document.getElementById("prompt-input").value;
  document.getElementById(
    "prompt-question"
  ).innerHTML = `Question: ${question1}`;

  if (question1.trim() === "") {
    document.getElementById("prompt-notes").innerHTML =
      "Response: Please enter a question.";
    return;
  }
  getOpenAIResponse(question1).then((response) => {
    document.getElementById(
      "prompt-response"
    ).innerHTML = `Response: ${response}`;
  });
});

document.getElementById("clear-button").addEventListener("click", () => {
  document.getElementById("prompt-input").value = "";
  document.getElementById("prompt-question").innerHTML = "Question: ";
  document.getElementById("prompt-response").innerHTML = "Response: ";
});
