let title = document.getElementById("title");
let nameField = document.getElementById("nameField");
let login = document.getElementById("login");
let signUp = document.getElementById("signUp");
let span = document.getElementById("span");

signUp.onclick = () => {
  if (signUp.innerHTML == "Sign Up") {
    title.innerHTML = "Sign Up";
    login.value = "Sign Up";
    span.innerHTML = "Have an account ?";
    nameField.hidden = false;
    signUp.innerHTML = "Login";
  } else {
    title.innerHTML = "Login";
    nameField.hidden = true;
    login.value = "Login";
    span.innerHTML = "Not a member ?";
    signUp.innerHTML = "Sign Up";
  }
};
