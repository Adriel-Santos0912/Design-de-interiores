// Seleciona o elemento footer
const footer = document.querySelector('footer');

function checkWidth(){
        // Verifica a altura do footer
    if (window.innerWidth > 820) {
        footer.style.display = 'grid'
    } else {
        footer.style.display = 'none'
    }
}

checkWidth()

window.addEventListener('resize', checkWidth)