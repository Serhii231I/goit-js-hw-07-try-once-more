const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (
    event.target.elements.email.value === "" ||
    event.target.elements.password.value === ""
  ) {
    return alert("All form fields must be filled in");
  }
  const info = {
    login: event.target.email.value.trim(),
    password: event.target.password.value.trim(),
  };

  console.log(info);
  event.target.reset();
}
