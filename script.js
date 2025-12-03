 // attendre 5 secondes avant d'afficher la page
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none"; 
        document.querySelector("#content").style.display = "block";
    }, 3000);

// animation des liens de navigation
const links = document.querySelectorAll('.pages a');

links.forEach(link => {
  link.addEventListener('click', () => {
    // Retirer l'ancien actif
    document.querySelector('.pages a.active')?.classList.remove('active');
    // Ajouter le nouveau
    link.classList.add('active');
  });
});
