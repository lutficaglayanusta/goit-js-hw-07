const form = document.querySelector(".login-form");

form.addEventListener("submit", function (e) {
  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  if (email === "" && password === "") {
    alert("All form fields must be filled in");
  }
  const infos = { email, password };

  console.log(infos);

  e.target.reset();
  e.preventDefault();
});
