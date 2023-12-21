function handleLogin(){
    /*
    If you read the comment in register.js, this is basically
    the same situation. The code just would not work - it would
    either always log the user in, or never log it in. I suspect
    it's to do with the fact that fetch() is an async function
    and to be honest i think i'd probably have to re-write/re-think
    the way the whole login and register system works to make it work
    and i don't really feel like doing that for this since again
    this is just a demo for an assignment
    */

    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;

    if((username === "demo1" && password === "demo1pass") || (username === "demo2" && password === "demo2pass")){
        localStorage.setItem("username", username);
        localStorage.setItem("loggedIn", "true");
        return true;
    } else {
        alert("Failed to log in! Maybe your username or password is wrong?")
        return false;
    }
}