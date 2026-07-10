const words = [
    "Web Developer",
    "Cybersecurity Enthusiast",
    "Future Entrepreneur",
    "Problem Solver",
    "Welcome to The Duke"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){
        typing.textContent = currentWord.substring(0, charIndex++);
    }else{
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 120;

    if(!deleting && charIndex > currentWord.length){
        deleting = true;
        speed = 1500;
    }

    if(deleting && charIndex < 0){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
// Navbar animation

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "0 0 25px rgba(0,255,255,.3)";

    }else{

        header.style.background = "rgba(10,10,10,.35)";
        header.style.boxShadow = "none";

    }

});
