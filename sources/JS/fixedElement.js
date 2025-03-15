const fixedElement = document.getElementById('fixedElement');
const header = document.querySelector('header');
const img = document.querySelector('#logo');
const contact = document.querySelector('.btnContact');
let trocaImg = document.getElementById("trocaDeLogo")

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        // Esconde o elemento quando o scroll ultrapassa 50px
        fixedElement.classList.add('hidden');
        header.classList.remove('header')
        header.classList.add('headerSmall')
        img.style.display= 'none'
        contact.classList.remove('btnContact')
        contact.classList.add('btnContactBlack')
        trocaImg.innerHTML = "<img id='logoBlack' class='img-fluid' src='sources/img/logoHeaderBlack.png' width='90%' alt=''>"
      } else {
        // Mostra o elemento novamente quando voltar ao topo
        fixedElement.classList.remove('hidden');
        header.classList.remove('headerSmall')
        header.classList.add('rool')
        header.style.backgroundColor = ''
        img.style.display= 'inline'
        contact.classList.add('btnContact')
        contact.classList.remove('btnContactBlack')
        trocaImg.innerHTML = "<img id='logo' class='img-fluid' src='sources/img/logoHeader.png' width='90%' alt=''>"
      }
    });