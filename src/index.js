function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  // build API URL
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "cfdo22bb3e4ct447ead942a949a20eb3";
  let prompt = `User instructions: Generate a Spanish poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML format and separate each line with a <br />. Remove the '```html'. Make sure to follow the user instructions. Also, include the English translation of the peom below the Spanish version, with a <br /> before it. Add a <strong> element before and after the spanish version. Sign the poem with 'SheCodes AI' inside an <em> element. Please, remember to add a <br /> element before the english version. All another <br /> tag right before the <em> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(apiUrl);
  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  // Make a call to the API

  axios.get(apiUrl).then(displayPoem);

  // Display the generated poem
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
