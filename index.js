/*alert("bonjour zaki")*/
const toggle = document.getElementById('toggle')
console.log(toggle)

const navbardroite = document.getElementById('navbardroite')
console.log(navbardroite)

const navbargauche = document.getElementById('navbargauche')
console.log(navbargauche)

toggle.addEventListener('click', () => {
    navbardroite.classList.toggle("momo"); // Ajoute ou enlève "momo"
    
    if (navbardroite.classList.contains("momo")) {
        navbargauche.style.display = 'none';
    } else {
        navbargauche.style.display = 'block'; // ou 'flex' selon ton besoin
    }
});
