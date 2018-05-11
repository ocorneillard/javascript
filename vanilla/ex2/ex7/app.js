
  /* agrandir la police de caractères (120%) */
  
const bigger = document.querySelector('#instructions li:first-child');
const content = document.getElementById("contenu");

bigger.addEventListener('click', (e) => {
  content.style.fontSize = "120%";
})
  
  /* diminuer la police de caractères (80%) */

  const smaller = document.querySelector('#instructions li:nth-child(2)');

  smaller.addEventListener('click', (e) => {
    content.style.fontSize = "80%";
  })
  
  /* mettre en gras ou remettre en normal les mots en vert */
  
  const greenText = document.querySelectorAll('.vert');
  const bolder = document.querySelector("#instructions li:nth-child(3)");
  bolder.addEventListener('click', (e) => {
      greenText.forEach((span) => {
        if (span.style.fontWeight === "bolder" ) {
        span.style.fontWeight = "normal";
        } else {
            span.style.fontWeight = "bolder";
        }
      });
    });
  /* souligner ou remettre en normal les mots en rouge */

  const redText = document.querySelectorAll('.rouge');
  const highlighted = document.querySelector('#instructions li:nth-child(4)');

  highlighted.addEventListener('click', (e) => {
      redText.forEach((span) => {

        if (span.style.textDecoration === "underline" ) {
          span.style.textDecoration = "none";
        } else {
            span.style.textDecoration = "underline";
        }
      });
    });

  /* remplacer le logo par une autre image au survol */
  
  const changeLogo = document.querySelector("img");
  const img = document.querySelector("#instructions li:nth-child(5)");
  img.addEventListener('mouseover', (e) => {
      changeLogo.src = "koala.jpg";
  });
  /* Afficher l'URL des liens dans une infobulle lors du survol des liens */
  
  const url = document.querySelectorAll('a');

  url.forEach((link) => {
    link.addEventListener('mouseenter', (e) => {
    let info = document.createElement('span');
    info.className = 'infobulle';
    info.innerHTML = link.href;
    insertAfter(info,link);
    });

    link.addEventListener('mouseleave', (e) => {
      const infobulle = document.querySelector('.infobulle');
      if (infobulle !== null) {
        infobulle.remove(infobulle);
      }
    });
});


  /* ajouter "Chapitre 1 :" devant le 1er titre h2<br>et "Chapitre 2 :" devant le 2ème titre h2 */

  const modh2 = document.querySelectorAll('h2')
  let a = 1;
  let b = 0;
  const chap = document.querySelector('#instructions li:nth-child(7)');
  
  chap.addEventListener('click', (e) => {
    if (b === 0) {
    modh2.forEach((h2) => {
      let text = h2.textContent;
      h2.innerText = `Chapitre ${a} : ${h2.textContent}`;
      a++;
      b = 1;
    });
    }
  });


  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}