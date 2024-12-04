const fixedElement = document.getElementById('fixedElement');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        // Esconde o elemento quando o scroll ultrapassa 50px
        fixedElement.classList.add('hidden');
      } else {
        // Mostra o elemento novamente quando voltar ao topo
        fixedElement.classList.remove('hidden');
      }
    });