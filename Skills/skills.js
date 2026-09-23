// Check Login
const email = localStorage.getItem("userEmail");

if (!email) {
    alert("Please login first");
    window.location.href = "../Login/login.html";
}

// Complete Skill
async function completeSkill(skillId) {

    try {

        const response = await fetch(
            "http://localhost:8080/api/skills/complete",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    skillId: skillId
                })
            }
        );

        const message = await response.text();

        alert(message);

        window.location.href = "../Home/home.html";

    } catch (error) {

        console.error(error);

        alert("Unable to complete skill.");

    }

}
async function loadSkills() {

    const response = await fetch(
        "http://localhost:8080/api/skills/" + email
    );

    const skills = await response.json();

    console.log("Logged in Email:", email);
console.log(skills);

}
loadSkills();