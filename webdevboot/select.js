// 5 important methods to know 

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

let id = document.getElementById("highlight");
let className = document.getElementsByClassName("bolded");
// not an array -> a node list -> array like 
// (advanced feature doesn't exist - foreach - for etc..)

let tagName = document.getElementsByTagName("h1")


// Easier !! Use CSS syntax
let id2 = document.querySelector("#highlight")
let classtest = document.querySelector(".bolder")

// Only take one h1
let tagtest = document.querySelector("h1")

// Take them all
let tagAll = document.querySelector("h1")


// Exercise 
let selectP = document.getElementById("first")
let selectC = document.getElementsByClassName("special")[0]
let selectT = document.getElementsByTagName("p")[0]
let selectQ = document.querySelector("#first")
let selectQa = document.querySelectorAll(".special")[0]


// Changing an element's style
// str.style.color = "blue";

// Adding/Removing classes
//  Changing the content of a tag 
// Changing attributes(src,href)

// /!\ instead of :
// let tag = document.getElementById("highlight")
// define a class in css and give that name to the element

// tag.classList.add <-- it's better

selectQ.classList.add("big")
selectQ.classList.remove("big")