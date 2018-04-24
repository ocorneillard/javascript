let handleClick = function(e) {
  button.style.display = "none";
};

let button = document.querySelectorAll('.hoverMe');

button.forEach(function(b){
   b.addEventListener('mouseover', handleClick.bind(b));
});

