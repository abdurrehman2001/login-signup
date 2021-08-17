let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log()
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}