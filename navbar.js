const navbar = document.getElementById("navbar")

if(localStorage.getItem("loggedIn") == "true") {
    navbar.innerHTML = `<a href="/index.html">Home</a><p>Hello, ${localStorage.getItem("username")}!</p><a href="/index.html" onclick=logout();>Log out</a>`;
}

function logout(){
    localStorage.setItem("username", null);
    localStorage.setItem("loggedIn", false);
    return true;
}