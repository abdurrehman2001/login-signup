let signup = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let number = document.getElementById("number");
    var user_data = {
        user_Name: username.value,
        email: email.value,
        password: password.value,
        contact_Number: number.value
    }
    firebase.database().ref("Information").push(user_data)
    swal("Good job!\n You login success ", "You clicked the button!", "success")
    setTimeout(() => {
        location.replace("../profile-page/profile-page.html")

    }, 4000);
}