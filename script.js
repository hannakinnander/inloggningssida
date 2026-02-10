// Element som har med "lägg till ny användare" att göra.
const newUserButton = document.getElementById("newUser");
const addUserField = document.getElementById("addUsername");
const goBack = document.querySelector(".goBack");


//Element som har med inloggnings-sektionen att göra.
const loginField = document.getElementById("login-field");
const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

addUserField.classList.add("hidden");

//När man trycker "Registrera konto"
function goToAddUserPage(){
    loginField.classList.add("hidden");
    addUserField.classList.remove("hidden");
    goBack.classList.remove("hidden");
    };
    
newUserButton.addEventListener("click", goToAddUserPage);

//När man trycker "Tillbaka till startsida"

goBack.addEventListener("click", function (){
    loginField.classList.toggle("hidden");
    addUserField.classList.add("hidden");
    goBack.classList.add("hidden");
})
//När man trycker "Logga ut"

//När man anger nytt användarnamn

const savedUsers = [];  
const newUsername = document.getElementById("newUsername");
const newPassword = document.getElementById("newPassword");
const tryNewPassword = document.getElementById("tryNewPassword");
const createAccount = document.querySelector(".createAccount");
const noMatchPassword = document.querySelector(".noMatchPassword");

const occupiedUsername = document.querySelector(".occupiedUsername");
const tryUsername = document.querySelector(".tryUsername");
tryUsername.addEventListener("click", addNewUser);

function addNewUser(){
    const name = newUsername.value;
    if (savedUsers.includes(name)){
        occupiedUsername.textContent = "Användarnamnet är upptaget"
        
    }
    else {
        document.querySelector(".firstStep").classList.add("hidden");
        document.querySelector(".addPassword").classList.remove("hidden");
        createAccount.addEventListener("click", function(){
            if (newPassword.value === tryNewPassword.value){
                const newAccount = {
                    name: newUsername.value,
                    password: newPassword.value
                };
                savedUsers.push(newAccount);
                localStorage.setItem("users", JSON.stringify(savedUsers));
            }
            else{
                noMatchPassword.classList.remove("hidden");
                noMatchPassword.textContent = "Lösenorden matchar inte";
            }
        })
        
    }
};


