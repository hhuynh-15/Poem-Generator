function writePoem(response) {
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
  let context =
    "You are an English poet and enjoy writing poems. Your task is to generate a 4 line poem. Be sure to write a poem based on the topic given by the user. Do not included a title to the poem. Take out the quotes in the poem. Sign the poem with 'SheCodes AI' inside both a <strong> and <em> element. Make sure to follow the user instructions.";
  let prompt = `User-instructions: Generate a 4 line poem in basic HTML. The poem must be short with rhymes about ${topicElement.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generate text");
  console.log(`Prompt is ${prompt}`);
  console.log(`Context is ${context}`);

  axios.get(apiUrl).then(writePoem);
}

let inputForm = document.querySelector("#text-input");
inputForm.addEventListener("submit", generateText);
