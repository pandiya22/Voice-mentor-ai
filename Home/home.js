
console.log("Voice Mentor Home Loaded");

// Logged in user's email
const email = localStorage.getItem("userEmail");

if (!email) {

    alert("Please login first");

    window.location.href = "../Login/login.html";

}

// Load profile
async function loadProfile() {

    try {

        const response = await fetch(
            "http://localhost:8080/api/auth/profile/" + email
        );

        if (!response.ok) {

            throw new Error("Unable to load profile");

        }

        const user = await response.json();

        document.getElementById("userName").textContent =
            user.fullName;

        document.getElementById("userLevel").textContent =
            "Level " + user.level + " Mentor Path";

        document.getElementById("xpValue").textContent =
            user.xp;

        document.getElementById("levelValue").textContent =
            user.level;

        document.getElementById("streakValue").textContent =
            user.streak;

    } catch (error) {

        console.error(error);

        alert("Unable to load profile.");

    }

}

loadProfile();