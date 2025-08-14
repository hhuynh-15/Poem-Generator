function generateText(response) {
  console.log("text generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 35,
  });
}

function generateText(event) {
  event.preventDefault();

  let topicElement = document.querySelector("#user-instructions");

  let textElement = document.querySelector("#poem");

  let apiKey = "faad3o1809a4255f243a6013tc9cb666";
  let prompt = `User-instructions: Generate a four-line haiku poem in English that is short with rhymes about ${topicElement.value}.`;
  let context =
    "You are an English poet and enjoy writing haikus. Your task is to generate a 4 line haiku poem. Be sure to write a poem based on the topic given by the user. Do not included a title to the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generate text");
  console.log(`Prompt is ${prompt}`);
  console.log(`Context is ${context}`);

  axios.get(apiUrl).then(generateText);
}

let inputForm = document.querySelector("#text-input");
inputForm.addEventListener("submit", generateText);
