let body = document.querySelector("body");
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");
let paragraphe = document.getElementById("first-paragraph");
paragraphe.classList.remove("bg-lime","gray");
paragraphe.classList.add("aqua");
let bgSilver = document.querySelector(".bg-silver");
bgSilver.classList.remove("bg-silver");
bgSilver.classList.add("bg-teal");
let blockquote = document.querySelector("blockquote");
blockquote.classList.add("bg-white")

// Exercice 2

let myTable = document.querySelector("#my-table");
myTable.classList.add("bg-purple");
let allP = document.querySelectorAll(".container p");

for (let i = 0; i < allP.length; i++){
    allP[i].classList.add("shadow");
}

// Exercice 3

let pre = document.querySelector("pre");
pre.style.color = "black";
pre.style.background = "white";
pre.style["border-top"] = "3px solid red";
pre.style["border-bottom"] = "3px solid red";
let h3 = document.querySelector("h3");
h3.innerHTML = "<em>Italic title !</em>";
let h2 = document.querySelector("h2");
h2.innerHTML = "<strong> HTML doesn't work !</strong>";

// Exercice 4

let ul = document.getElementsByTagName("ul")[0];
ul.innerHTML = "<li>Mon meilleur ami est <a href='http://www.google.com'>Google</a></li>"
let liA = document.querySelector("li a");
liA.style.color = "white";

// Exercice 5

let ol = document.getElementsByTagName("ol")[0];

while (ol.firstChild) {
    ol.removeChild(ol.firstChild)
}

let learn = ["Silent Teacher","Code Monkey","CodeCombat"];

for (let i = 0; i < learn.length ; i++) {
    let li = document.createElement("li")
    li.innerHTML = learn[i]
    ol.appendChild(li)
}