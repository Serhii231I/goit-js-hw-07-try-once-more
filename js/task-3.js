const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  console.log(input);

  const userOutput = event.currentTarget.value.trim();
  if (userOutput.length < 1) {
    output.textContent = "Anonymous";
  } else {
    output.textContent = userOutput;
  }
});
// console.log(output);

// const userName = document.querySelector("#name-input");
// const userOutput = document.querySelector("#name-output");
// userName.addEventListener("input", handleInput);
// function handleInput(event) {
//   console.log(event.target.value);
//   console.log(userName.value.length);
//   const inputValue = userName.value.trim();

//   if (inputValue.length < 1) {
//     userOutput.textContent = "Anonymous";
//   } else {
//     userOutput.textContent = inputValue;
//   }
// }
