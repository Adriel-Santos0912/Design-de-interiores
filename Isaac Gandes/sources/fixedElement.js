const fixedElement = document.getElementById('fixedElement');
const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        // Esconde o elemento quando o scroll ultrapassa 50px
        fixedElement.classList.add('hidden');
        header.classList.remove('header')
        header.classList.add('headerSmall')
      } else {
        // Mostra o elemento novamente quando voltar ao topo
        fixedElement.classList.remove('hidden');
        header.classList.remove('headerSmall')
        header.classList.add('rool')
      }
    });