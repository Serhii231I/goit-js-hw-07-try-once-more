function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  console.log(event);

  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = bodyColor.style.backgroundColor;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const body = document.querySelector("body");
// const button = document.querySelector(".change-color");
// const span = document.querySelector(".color");
// button.addEventListener("click", handleClick);
// function handleClick(event) {
//   event.preventDefault();
//   body.style.backgroundColor = getRandomHexColor();
//   span.textContent = body.style.backgroundColor;
// }
