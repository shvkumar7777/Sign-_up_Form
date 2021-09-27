const fromEle = document.getElementById('form');
const pwd1Ele = document.getElementById('pass');
const pwd2Ele = document.getElementById('pass1');
const msgContainerEle = document.querySelector('.message-container');
const messageEle = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

// validate the Form
function validateForm() {
    isValid = fromEle.checkValidity();
    if (!isValid) {
        messageEle.textContent = "Please fill out all the fields";
        msgContainerEle.style.borderColor = "red";
        messageEle.style.color = 'red';
        return;
    }
    // check if the passwords are same
    if (pwd1Ele.value === pwd2Ele.value) {
        passwordsMatch = true;
        pwd1Ele.style.borderColor = "green";
        pwd2Ele.style.borderColor = "green";
       
    } else {
        passwordsMatch = false;
        messageEle.textContent = "Passwords do not match";
        messageEle.style.color = "red";
        msgContainerEle.style.borderColor = "red";
        pwd1Ele.style.borderColor = "red";
        pwd2Ele.style.borderColor = "red";
        return;
    }
    
    //if the forms nd passwords are matching then 
    if (isValid && passwordsMatch) {
        messageEle.textContent = "Successfully registered";
        messageEle.style.color = "green";
        msgContainerEle.style.borderColor = "green";
    }
}

// Store the data
function storeUserData() {
    const user = {
        fullName: fromEle.fullName.value,
        phone: fromEle.phone.value,
        email: fromEle.email.value,
        url: fromEle.url.value,
        password: fromEle.password.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem("user")));
}

//clear the user details from the storage when the browser refreshes
function removeUser() {
    localStorage.removeItem("user");
}

// process Form Data
function processFormData(e) {
    e.preventDefault();
    //validate the form
    validateForm();

    // Store the user data
    if (isValid && passwordsMatch) {
        storeUserData();
    }
}

// add event listeners
fromEle.addEventListener('submit', processFormData);

//on load remove the user from the local storage
removeUser();