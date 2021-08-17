firebase.database().ref(`Information`).on("child_added", (data) => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let number = document.getElementById("number");
    name.innerHTML = `Name ` + data.val().user_Name
    email.innerHTML = `Email Address ` + data.val().email
    password.innerHTML = `Password ` + data.val().password
    number.innerHTML = `Your Contact Number ` + data.val().contact_Number
} 
)