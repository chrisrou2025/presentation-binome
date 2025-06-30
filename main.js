const paragraphes = document.querySelectorAll("p");

// Boucle sur chaque paragraphe et ajoute un écouteur d'événement
paragraphes.forEach(paragraphe => {
  paragraphe.addEventListener("click", function() {
    alert("Vous avez cliqué sur : " + this.textContent);
  });
});