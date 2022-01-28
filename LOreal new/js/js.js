// Accordeon 
const accordeon = document.getElementsByClassName("contentBox")

for (i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener('click',
        function() {
            this.classList.toggle('active')
        }
    )
}

// sing up
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());