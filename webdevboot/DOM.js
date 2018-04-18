//  SELECT AND MANIPULATE

let h1 = document.querySelector("h1");

h1.style.color = "pink"


let body = document.querySelector("body")
let isBlue = false

setInterval( () => {
    if (isBlue) {
        h1.style.float = "right"
        body.style.background = "white"
    }else{
        body.style.background = "#3498db"
        h1.style.float = "left"
    }
    isBlue = !isBlue
}, 2000)