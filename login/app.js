let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    // .then((user)=>{
    //     console.log(user)
        
        location.replace("../profile-page/profile-page.html")
        // location.replace("../proile-page/profile-page.html")
        // firebase.database().ref(`User-Information`).on("child_added", (data) => {
            // console.log(data.val())
    // })
    


        // .then((userCredential) => {
            // var user = userCredential.user;
        // })
        // .catch((error) => {
        //     var errorMessage = error.message;
        //     console.log(errorMessage)
        // })
}
    // ) }

    
