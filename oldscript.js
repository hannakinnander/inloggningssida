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
}
else {
    loggedIn.classList.add("hidden");
    loginField.classList.remove("hidden");
    changeAccountButton.classList.add("hidden");
    logOut.classList.add("hidden");
    goBack.classList.add("hidden");
    loginButton.textContent = "Logga in";
}
}//Kolla sparat minne när sidan laddas
updateStatus();
let savedUsers = JSON.parse(localStorage.getItem("user")) || [];  
let username = null;
//Headerns element
const goBack = document.querySelector(".goBack");
const changeAccountButton = document.querySelector(".changeAccount");
const logOut = document.querySelector(".logOut");

//Element som har med inloggnings-sektionen att göra.
const loginField = document.getElementById("login-field");
const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const newUserButton = document.getElementById("newUser");

//Element som har med skapa ny användare att göra
const addUserField = document.getElementById("addUsername");
const checkUsernameBox = document.querySelector(".checkUsernameBox");
const newUsername = document.getElementById("newUsername");
const occupiedUsername = document.querySelector(".occupiedUsername");
const tryUsername = document.querySelector(".tryUsername");
const newPassword = document.getElementById("newPassword");
const tryNewPassword = document.getElementById("tryNewPassword");
const createAccount = document.querySelector(".createAccount");
const noMatchPassword = document.querySelector(".noMatchPassword");
const newAccountAdded = document.querySelector(".newAccountAdded");

//Element som har med inloggad-vyn att göra
const loggedIn= document.querySelector(".loggedIn");
const welcomeMessage = document.querySelector(".loggedIn h3");

changeAccountButton.addEventListener("click", goToLogin);

function goToLogin(){
    loginField.classList.remove("hidden");
    loginButton.textContent = "Byt användare";
}


//När man trycker "Registrera konto"
function goToAddUserPage(){
    loginField.classList.add("hidden");
    addUserField.classList.remove("hidden");
    checkUsernameBox.classList.remove("hidden");
    goBack.classList.remove("hidden");
    occupiedUsername.classList.add("hidden");
    };
    
newUserButton.addEventListener("click", goToAddUserPage);

//När man trycker "Tillbaka till startsida"

goBack.addEventListener("click", function (){
    
    newUsername.value = "";
    newPassword.value = "";
    tryNewPassword.value = "";
    usernameInput.value = "";
    passwordInput.value= "";
    updateStatus();
    
})
//När man trycker "Logga ut"

//När man anger nytt användarnamn
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
        document.querySelector(".firstStep").classList.add("hidden");
        document.querySelector(".addPassword").classList.remove("hidden");
    }
}
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
        document.querySelector(".addPassword").classList.add("hidden");
    }
    else{
        noMatchPassword.classList.remove("hidden");
        return;
    }
};
   //När man trycker logga in
    loginButton.addEventListener("click", logIn);

    function logIn(){
       savedUsers = JSON.parse(localStorage.getItem("user")) || [];
       username = usernameInput.value.trim();
       const password = passwordInput.value;
       
       const foundUser = savedUsers.find(user => user.username === username &&
            user.password === password 
       );
       if (foundUser){
            loginField.classList.add("hidden");
            goBack.classList.remove("hidden");
            logOut.classList.remove("hidden");
            loggedIn.classList.remove("hidden");
            welcomeMessage.textContent = "Välkommen, " + username + "!";
            localStorage.setItem("loggedIn", username);
       }
       else{
        document.querySelector(".cantLogin").classList.remove("hidden");
       }
    }


