async function addXp(points){

    const email =
    localStorage.getItem("userEmail");

    const response =
    await fetch(
    "http://localhost:8080/api/auth/xp",{

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            email:email,
            xp:points

        })

    });

    const message =
    await response.text();

    console.log(message);


}
