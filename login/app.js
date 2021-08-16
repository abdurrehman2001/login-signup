let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    // console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            if(email.value && password.value){
                setTimeout(function(){ alert("Hello"); }, 1000);
    
            }
            
            // var user = userCredential.user;
            // console.log(email.value === "" && password.value === "")
            // if(email.value === "" && password.value === ""){
                //     alert("Okkk")
                // }
            })
            .catch((error) => {
                // var errorMessage = error.message;
                // console.log(errorMessage)
                // let box = document.getElementById("box")
                let boxx = document.getElementById("boxx")
                if(email.value === "" && password.value === ""){
                    boxx.style.display = "none"
                    // box.style.display = "none";
                    // let text = `Plz Enter Email & Password`
                    // box.style.display = "block"
                    // box.innerHTML = text
                }
        });
}