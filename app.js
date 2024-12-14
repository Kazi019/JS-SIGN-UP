// Declaring Id
const userInputId = document.querySelector("#user_input");
const userNameId = document.querySelector("#user_name");
const userEmailId = document.querySelector("#user_email");
const userPasswordId = document.querySelector("#user_password");
const userDataId1 = document.querySelector("#user_data1");
const userDataId2 = document.querySelector("#user_data2");
const userDataId3 = document.querySelector("#user_data3");
const DOMPurify = require('dompurify');
const cleanHTML = DOMPurify.sanitize(userInputId);

document.cookie = "sessionID=abc123;key=value; Secure; Secure; SameSite=Strict";


// Preventing Default Behavior of Form
userInputId.addEventListener("submit", (e) => {
    e.preventDefault();

    // Declaring Object for Storing User Data
    let userDatas = {
        userName: userNameId.value,
        userEmail: userEmailId.value,
        userPassword: userPasswordId.value,
    };

    // Resetting the danger class
    userDataId3.classList.remove("danger");

    // Conditions for making it dynamic
    if (userDatas.userPassword.length < 8) {
        userDataId3.innerHTML = "Your password must be greater than 8 characters";
    }else if(userDatas.userName.length < 4){
        userDataId1.innerHTML  = "Your username must be greater than 4 characters";

    }else if(userDatas.userEmail.length < 7){
        userDataId2.innerHTML = "Your email must be greater than 6 characters"
    } else {
        // Display user data
        userDataId1.innerHTML = `Username: ${userDatas.userName}`;
        userDataId2.innerHTML = `Email: ${userDatas.userEmail}`;
        userDataId3.innerHTML = `Password: ${userDatas.userPassword}`;
        location.replace("/about.html")
    }
});
