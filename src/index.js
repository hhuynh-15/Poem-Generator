function generateText(event) {
  event.preventDefault();

  let textElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "The generated poem will be here.",
    autoStart: true,
    cursor: "",
    delay: 35,
  });
}

let inputForm = document.querySelector("#text-input");
inputForm.addEventListener("submit", generateText);
