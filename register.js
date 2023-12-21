function handleRegister(){
    /*  
    Used to have code to open a JSON file called
    "users.json" and to check if the email/username
    already was in use and what not like that
    but could not get it to work properly so since
    this isn't for prod or anything like that I'm just
    hardcoding it. god have mercy on my soul for doing this
    */

    const email = document.getElementById("email-input").value;
    const username = document.getElementById("username-input").value;

    if(email === 'demo1@demo.com' || email === 'demo2@demo.com'){
        alert("Email already in use!");
        return false;
    } else if(username === 'demo1' || username === 'demo2'){
        alert("Username already in use!");
        return false;
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("loggedIn", "true");
        return true;
    }
}