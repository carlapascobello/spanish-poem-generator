function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "cfdo22bb3e4ct447ead942a949a20eb3";
  let prompt = `User instructions: Generate a Spanish poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML format and separate each line with a <br /> tag. Remove the '```html'. Make sure to follow the user instructions. Also, include the English translation of the peom below the Spanish version. Add a <strong> element before and after the Spanish version only. Please, add another two <br /> elements after the Spanish version to separate the two languages. At the bottom, sign the poem with 'SheCodes AI' inside an <em> element. Please, add another two <br /> tags right before the <em> element. Do this consistenly, please.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛️ Generating a Spanish poem about ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
