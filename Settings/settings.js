// Check Login

const email = localStorage.getItem("userEmail");

if (!email) {

    alert("Please login first");

    window.location.href = "../Login/login.html";

}