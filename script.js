// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// ==========================
// Navbar Shadow on Scroll
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";
navbar.style.background="rgba(15,23,42,.95)";

}else{

navbar.style.boxShadow="none";
navbar.style.background="rgba(15,23,42,.9)";

}

});


// ==========================
// Fade In Animation
// ==========================

const hiddenElements = document.querySelectorAll(
".about,.skills,.projects,.stats,.contact"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

hiddenElements.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="1s";

observer.observe(section);

});


// ==========================
// Button Hover Animation
// ==========================

const buttons=document.querySelectorAll(".btn,.btn-small");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// ==========================
// Project Card Hover
// ==========================

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


// ==========================
// Skill Card Hover
// ==========================

const skills=document.querySelectorAll(".skill-card");

skills.forEach(skill=>{

skill.addEventListener("mouseenter",()=>{

skill.style.transform="translateY(-10px) rotate(2deg)";

});

skill.addEventListener("mouseleave",()=>{

skill.style.transform="translateY(0) rotate(0deg)";

});

});


// ==========================
// Contact Form
// ==========================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});