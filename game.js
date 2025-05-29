const scrollRevealOption = {
    distance: "50px",
    origin: "top",
    duration: 1000,
    opacity: 0,
    reset: false, 
};

// Initialize ScrollReveal
const sr = ScrollReveal();

// Apply ScrollReveal to each section and its elements
sr.reveal("#registerForm", {
    ...scrollRevealOption,
    origin: "top",
    duration:500,
});
sr.reveal("#h1Txt", {
    ...scrollRevealOption,
    origin: "left",
    duration:700,
});
sr.reveal(".pTxt", {
    ...scrollRevealOption,
    origin: "top",
    duration: 800,
});
sr.reveal(".pTxt2", {
    ...scrollRevealOption,
    origin: "top",
    duration: 1000,
});
sr.reveal(".pTxt3", {
    ...scrollRevealOption,
    origin: "top",
    duration: 1200,
});
sr.reveal(".pTxt4", {
    ...scrollRevealOption,
    origin: "top",
    duration: 1500,
});
sr.reveal(".register", {
    ...scrollRevealOption,
    origin: "top",
    duration: 1700,
});
function showCustomAlert(message) {
    const alertBox = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");
    alertMessage.textContent = message; // Set the message
    alertBox.style.display = "flex"; // Show the popup
}

// Function to hide custom alert
function hideCustomAlert() {
    const alertBox = document.getElementById("customAlert");
    alertBox.style.display = "none"; // Hide the popup
}

// Form validation logic
document.getElementById("registerBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    const confirmPassword = document.getElementById("confirmPasswordInput").value.trim();

    // Check if any field is empty
    if (!name || !email || !password || !confirmPassword) {
        showCustomAlert("Some info is missing");
        return; // Stop further processing
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        showCustomAlert("Passwords do not match");
        return;
    }

    // If all validations pass, submit the form
    document.getElementById("registerForm").submit();
});

// Close alert when OK button is clicked
document.getElementById("closeAlert").addEventListener("click", function () {
    hideCustomAlert();
});

let firstName = ["doe","angela", "alice"]

function map(){
   let firstNameUpper = firstName.map( name => name.toUpperCase());
    console.log(firstNameUpper);
}
