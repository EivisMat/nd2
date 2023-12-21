const eye = document.getElementById("eye");
const passwordInput = document.getElementById("password-input");

eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
})


