function goToLogin(){

  window.location.href =
  "../Login/login.html";

}

//loading progress
let progress = 0;

const bar =
document.getElementById(
"progressBar"
);

const textValue =
document.getElementById(
"progressText"
);

const interval =
setInterval(()=>{

  progress++;

  bar.style.width =
  progress + "%";

  textValue.innerHTML =
  progress + "%";

  if(progress >= 100){

    clearInterval(interval);

  }

},30);