
let character = document.getElementById("character");

  let keyPressed = function (e) {
    let key = e.which || e.keyCode;
    let rand = Math.floor(Math.random() * 255);
    
    switch (key) {
      case 96:
        character.style.backgroundColor = `rgba(
          ${rand},
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)},
          1)`;

        break;
      
      case 97:
        character.style.backgroundColor = `rgba(
          ${rand},
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)},
          1)`;
        break;

       case 98:
       character.style.backgroundColor = `rgba(
        ${rand},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        1)`;
        break;

      case 99:
      character.style.backgroundColor = `rgba(
        ${rand},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        1)`;
        break;

      case 100:
      character.style.backgroundColor = `rgba(
        ${rand},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        1)`;
        break;

      case 101:
      character.style.backgroundColor = `rgba(
        ${rand},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        1)`;
        break;

      case 102:
      character.style.backgroundColor = `rgba(
        ${rand},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        1)`;
        break;

      case 103:
      character.style.backgroundColor = `rgba(
        ${rand},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        1)`;
        break;

      case 104:
      character.style.backgroundColor = `rgba(
        ${rand},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        1)`;
        break;

      case 105:
      character.style.backgroundColor = `rgba(
        ${rand},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        1)`;
        break;
    }
  }
  window.addEventListener('keydown', keyPressed);
  let highlight = document.getElementById("left");

let high = function (a) {
  return document.getElementById(a);
}
let keyDown = function(e) {
  let key = e.which || e.keyCode;
  
  switch (key) {
    case 37:
      high("left").className = "highlight";
      break;
    case 38:
      high("up").className = "highlight";
      break;
    case 39:
      high("right").className = "highlight";
      break;
    case 40:
      high("down").className = "highlight";
      break;
  }
}


let KeyUp = function(e) {
  let key = e.which || e.keyCode;

  switch (key) {
    case 37:
      high("left").className = "left";
      break;
    case 38:
      high("up").className = "up";
      break;
    case 39:
      high("right").className = "right";
      break;
    case 40:
      high("down").className = "down";
      break;
  }
}


  window.addEventListener('keyup', KeyUp);
  window.addEventListener('keydown', keyDown);

  
