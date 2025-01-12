function id(id) {
    return document.getElementById(id);
}


const form = id("myForm");

// Declaring & initailizing error messages
let fNameError = id("fnameError");
let lNameError = id("lnameError");
let passwordError = id("passwordError");
let emailError = id("emailError");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    
    // setting the defualt text content empty
    [fNameError, lNameError, passwordError, emailError].forEach((error) => {
    error.textContent = ""
    });
    
    // Declaring & initializing input values
    const firstName = id("fname").value;
    const lastName = id("lname").value;
    const password = id("password").value;
    const email = id("email").value;
    
    // Regex pattern for input
    const fNamePattern = /[a-z]/i;
    const lNamePattern = /[a-z]/i;
    const emailPattern = /^([\w.-]{2,50})@[a-z\d]{2,20}\.[a-z\d]{2,20}/i; 

    // Makeup function for password validation
    function validatePassword(pWord) {
        let p1 = /[A-Z]/, p2 = /\d/, p3 = /[a-z]/, p4 = /\S{8,}/;
        return p1.test(pWord) && p2.test(pWord) && p3.test(pWord) && p4.test(pWord); 
    }
    
    // conditions for validation
    
    if (firstName === "") {
        valid = false;
        fNameError.style.display = "block";
        fNameError.textContent = "First Name cannot be empty";   
    } else if (!fNamePattern.test(firstName)) {
        valid = false;
        fNameError.style.display = "block";
        fNameError.textContent = "Enter a valid First Name";   
    }

    if (lastName === "") {
        valid = false;
        lNameError.style.display ="block";
        lNameError.textContent = "Last Name cannot be empty";
    } else if (!lNamePattern.test(lastName)) {
        valid = false;
        lNameError.style.display = "block";
        lNameError.textContent = "Enter a valid Last Name";
    }


    if (email === "") {
        valid = false;
        emailError.style.display="block";
        emailError.textContent = "Email is required";  
    } else if (!emailPattern.test(email)) {
        valid = false;
        emailError.style.display="block";
        emailError.textContent = "Enter a valid email address";
} 
    
    if (password === "") {
        valid = false;
        passwordError.style.display="block";
        passwordError.textContent = "Password cannot be empty";
    } else if (!validatePassword(password)) {
        valid = false;
        passwordError.style.display="block";
        passwordError.textContent = "Password must contain: At least 8 characters, a number, a lowercase and uppercase letter";
    }


    if (valid) {
        alert("Form submitted successfully");
    }
});

        