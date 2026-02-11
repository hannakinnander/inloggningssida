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
    