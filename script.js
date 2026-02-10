const newUserButton = document.getElementById("newUser");
const addUserField = document.querySelector(".addUser")
const headerRight = document.querySelector(".headerRight");

const loginField = document.getElementById("login-field");
const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function goToAddUserPage(){
    loginField.classList.add("hidden");
    addUserField.hidden = false;
    headerRight.hidden = false;

}

newUserButton.addEventListener("click", goToAddUserPage);

const toHomePage = document.getElementById("goBack");
toHomePage.addEventListener("click", function (){
    loginField.classList.toggle("hidden");
    addUserField.hidden = true;
    headerRight.hidden = true;
})
