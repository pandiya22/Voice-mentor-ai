// Password Show / Hide

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML = "🙈";
    } else {
        password.type = "password";
        togglePassword.innerHTML = "👁";
    }

});

toggleConfirmPassword.addEventListener("click", () => {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirmPassword.innerHTML = "🙈";
    } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.innerHTML = "👁";
    }

});

// ===============================
// Register User
// ===============================

const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", async () => {

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const passwordValue = document.getElementById("password").value;
    const confirmPasswordValue = document.getElementById("confirmPassword").value;

    // Validation
    if (!fullName || !email || !passwordValue || !confirmPasswordValue) {
        alert("Please fill all fields");
        return;
    }

    if (passwordValue !== confirmPasswordValue) {
        alert("Passwords do not match");
        return;
    }

    try {

        const response = await fetch("http://localhost:8080/api/auth/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                fullName: fullName,
                email: email,
                password: passwordValue
            })

        });

        const message = await response.text();

        alert(message);

        if (message === "Registration Successful") {

            window.location.href = "../Login/login.html";

        }

    } catch (error) {

        alert("Unable to connect to server.");

        console.error(error);

    }

});