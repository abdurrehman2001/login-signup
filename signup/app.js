let signup = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let number = document.getElementById("number");
    var user_key = firebase.database().ref("User-Information").push().key
    var user_data = {
        user_Name: username.value,
        email: email.value,
        password: password.value,
        contact_Number: number.value,
        key: user_key
    }
    console.log(user_data)
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)

            firebase.database().ref("User-Information").child(user_key).set(user_data)
            swal("Good job!\n You login success ", "You clicked the button!", "success")
            setTimeout(() => {
                location.replace("../profile-page/profile-page.html")

            }, 3000);
            console.log(user)
        // }
        // )
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        })
}