// Element som har med "lägg till ny användare" att göra.
const newUserButton = document.getElementById("newUser");
const addUserField = document.getElementById("addUser");
const headerRight = document.querySelector(".headerRight");

//Element som har med inloggnings-sektionen att göra.
const loginField = document.getElementById("login-field");
const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

addUserField.classList.add("hidden");

function goToAddUserPage(){
    loginField.classList.add("hidden");
    addUserField.classList.remove("hidden");
    headerRight.hidden = false;
    };
    


newUserButton.addEventListener("click", goToAddUserPage);

const toHomePage = document.getElementById("goBack");
toHomePage.addEventListener("click", function (){
    loginField.classList.toggle("hidden");
    addUserField.classList.add("hidden");
    headerRight.hidden = true;
})
