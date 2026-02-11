//Headerns element
const goBack = document.querySelector(".goBack");
const changeAccountButton = document.querySelector(".changeAccount");
const logOut = document.querySelector(".logOut");

//Element som har med inloggnings-sektionen att göra.
const loginField = document.querySelector(".loginField")
const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const cantLogin = document.querySelector(".cantLogin");
const loginButton = document.querySelector(".loginButton");

const newUserButton = document.querySelector(".newUser");

//Element som har med skapa ny användare att göra
const addNewUserField = document.querySelector(".addNewUserField");
const checkUsernameBox = document.querySelector(".checkUsernameBox");
const newUsername = document.querySelector(".newUsername");
const occupiedUsername = document.querySelector(".occupiedUsername");
const tryUsername = document.querySelector(".tryUsername");
const addPasswordField = document.querySelector(".addPasswordField")
const newPassword = document.querySelector(".newPassword");
const tryNewPassword = document.querySelector(".tryNewPassword");
const createAccount = document.querySelector(".createAccount");
const noMatchPassword = document.querySelector(".noMatchPassword");
const newAccountAdded = document.querySelector(".newAccountAdded");

//Element som har med inloggad-vyn att göra
const loggedIn= document.querySelector(".loggedIn");
const welcomeMessage = document.querySelector(".loggedIn h3");

//Kollar när man kommer in om det finns en inloggad användare
window.addEventListener("load", updateStatus);

//Behållare för användare
let savedUsers = [];
let username = null;
//Logga in
 loginButton.addEventListener("click", logIn);

    function logIn(){
       savedUsers = JSON.parse(localStorage.getItem("user")) || [];
       username = usernameInput.value.trim();
       const password = passwordInput.value;
       const foundUser = savedUsers.find(user => user.username === username &&
            user.password === password);
       if (foundUser){
            loginField.classList.add("hidden");
            goBack.classList.remove("hidden");
            logOut.classList.remove("hidden");
            loggedIn.classList.remove("hidden");
            welcomeMessage.textContent = "Välkommen, " + username + "!";
            localStorage.setItem("loggedIn", username);
       }
       else{
        cantLogin.classList.remove("hidden");
       }
    }

    //När man trycker Registrera dig här
    newUserButton.addEventListener("click", goToAddUserPage);
    function goToAddUserPage(){
        loginField.classList.add("hidden");
        addNewUserField.classList.remove("hidden");
        checkUsernameBox.classList.remove("hidden");
        goBack.classList.remove("hidden");
    };

    //När man fyller i önskat användarnamn
    tryUsername.addEventListener("click", addNewUser);

    function addNewUser(){
        username = newUsername.value.trim();
        const usernameTaken = savedUsers.some(
            newAccount => newAccount.username === username);
    
        if (usernameTaken){
            occupiedUsername.classList.remove("hidden");
            return;
    }
    else {
        checkUsernameBox.classList.add("hidden");
        addPasswordField.classList.remove("hidden");
    }
    }
    
    //När man lägger till lösenord
    createAccount.addEventListener("click", createAccountHandler);

    function createAccountHandler(){
        if (newPassword.value === tryNewPassword.value){
            const newAccount = {
                username: username,
                password: newPassword.value
                };
    savedUsers.push(newAccount);
    localStorage.setItem("user", JSON.stringify(savedUsers));
    newAccountAdded.classList.remove("hidden");
    newAccountAdded.textContent= "Användaren " + username + " har lagts till!"
    addPasswordField.classList.add("hidden");
    }
    else{
        noMatchPassword.classList.remove("hidden");
        return;
    }
};

function updateStatus(){
let loggedInUser = localStorage.getItem("loggedIn");
if (loggedInUser){
    loggedIn.classList.remove("hidden");
    welcomeMessage.classList.remove("hidden");
    welcomeMessage.textContent = "Inloggad som " + loggedInUser;
    loginField.classList.add("hidden");
    changeAccountButton.classList.remove("hidden");
    newAccountAdded.classList.add("hidden");
    logOut.classList.remove("hidden");
    goBack.classList.add("hidden");
}
else {
    loggedIn.classList.add("hidden");
    loginField.classList.remove("hidden");
    changeAccountButton.classList.add("hidden");
    logOut.classList.add("hidden");
    goBack.classList.add("hidden");
    loginButton.textContent = "Logga in";
}
}
//När man trycker Tillbaka till startsida
goBack.addEventListener("click", updateStatus);

//När man trycker Logga in på annat konto
changeAccountButton.addEventListener("click", showLogin);
function showLogin(){
    usernameInput.value = "";
    passwordInput.value= "";
    loginField.classList.remove("hidden");
}