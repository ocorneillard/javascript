// let body = document.querySelector("body")
// let makeit = () => {
//     if (body.style.background == "green"){
//         body.style.background = "black"
//     }else{
//         body.style.background = "green"
//     }
// }


// let button = document.querySelector("button")
// button.addEventListener("click", makeit() )

let body = document.querySelector("body");
body.style.background = "green";
let button = document.querySelector("button");

isGreen = true
// button.addEventListener("click", () => {
//     if (isGreen === true) {
//         body.style.background = "black";
//         isGreen = false;
//     }else{
//         body.style.background = "green";
//         isGreen = true;
//     }
// })

button.addEventListener("click", () => {
    if (isGreen) {
        body.style.background = "black"
    }else{
        body.style.background = "green"
    }
    isGreen = !isGreen
})

// button.addEventListener("click", () => {
//     document.body.classList.toggle("purple");
// });