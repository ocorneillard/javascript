

let button = document.querySelectorAll('.hoverMe, .nose, .miam');

button.forEach(function(b){


   let handleClick = function(e) {
    b.style.visibility = "hidden";
  };

  b.addEventListener('mouseover', handleClick);
});

