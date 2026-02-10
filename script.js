const newUserButton = document.getElementById("newUser");
const addUserField = document.querySelector(".addUser")
const loginField = document.getElementById("login-field");
const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function goToAddUserPage(){
    loginField.classList.add("hidden");
    addUserField.hidden = false;

}

newUserButton.addEventListener("click", goToAddUserPage);
