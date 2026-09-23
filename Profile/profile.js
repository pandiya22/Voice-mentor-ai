
console.log("Profile Page Loaded");

// Logged-in user's email
const email = localStorage.getItem("userEmail");

if (!email) {
    window.location.href = "../Login/login.html";
}

// Load profile from backend
async function loadProfile() {

    try {

        const response = await fetch(
            "http://localhost:8080/api/auth/profile/" + email
        );

        if (!response.ok) {
            throw new Error("Failed to load profile");
        }

        const user = await response.json();

        // Header
        document.getElementById("profileName").textContent = user.fullName;

        // Stats
        document.getElementById("profileXp").textContent = user.xp;
        document.getElementById("profileLevel").textContent = user.level;
        document.getElementById("profileStreak").textContent = user.streak;

        // Information
        document.getElementById("infoName").textContent = user.fullName;
        document.getElementById("infoEmail").textContent = user.email;

        // Joined Date
        if (user.createdAt) {
            const date = new Date(user.createdAt);

            document.getElementById("joinedDate").textContent =
                date.toLocaleDateString();
        }

    } catch (error) {

        console.error(error);
        alert("Unable to load profile.");

    }

}

loadProfile();

// Logout
document.querySelector(".logout-btn").addEventListener("click", () => {

    localStorage.removeItem("userEmail");

    window.location.href = "../Login/login.html";

});