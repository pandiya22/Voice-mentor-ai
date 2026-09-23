// Show / Hide Password

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.innerHTML = "🙈";

    } else {

        password.type = "password";
        togglePassword.innerHTML = "👁";

    }

});

// ==========================
// Login
// ==========================

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value.trim();
    const passwordValue = document.getElementById("password").value;

    // Validation
    if (!email || !passwordValue) {
        alert("Please enter Email and Password");
        return;
    }

    try {

        const response = await fetch("http://localhost:8080/api/auth/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                email: email,
                password: passwordValue

            })

        });

        const message = await response.text();

        if (message === "Login Successful") {

            // Save logged-in user
            localStorage.setItem("userEmail", email);

            alert("Login Successful");

            window.location.href = "../Home/home.html";

        } else {

            alert(message);

        }

    } catch (error) {

        console.error(error);
        alert("Unable to connect to the server.");

    }

});