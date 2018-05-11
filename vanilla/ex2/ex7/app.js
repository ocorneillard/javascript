
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

  
  /* remplacer le logo par une autre image au survol */
  
  
  /* Afficher l'URL des liens dans une infobulle lors du survol des liens */
  
  /* ajouter "Chapitre 1 :" devant le 1er titre h2<br>et "Chapitre 2 :" devant le 2ème titre h2 */
  
