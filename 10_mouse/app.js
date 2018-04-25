let button = document.querySelectorAll('.hoverMe, .nose, .miam');

button.forEach(function(b){


   let handleClick = function(e) {
    b.style.visibility = "hidden";
  };

  b.addEventListener('mouseover', handleClick);
});

let reset = document.getElementById("reset");

let visibilityOn = function(e){
  
  button.forEach(function(b) {
    b.style.visibility = "visible";
  });
}

reset.addEventListener('click', visibilityOn);

let moveData = document.querySelector('.axe-x');
let mouse = document.querySelector(".mouse");
mouse.addEventListener('mousemove', printData);

function printData(e) {
  
  let eyes = document.querySelectorAll('.hoverMe');
  eyes[0].style.background = `rgba(${e.offsetX},0,${e.offsetY})`;
  eyes[1].style.background = `rgba(${e.offsetX},0,${e.offsetY})`;
}