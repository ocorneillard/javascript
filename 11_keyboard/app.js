
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

  
  
