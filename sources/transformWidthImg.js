const pImagem = document.querySelector('.imagem1');
const sImagem = document.querySelector('.imagem2');
const clique = document.querySelector('.click');

function verificarResolucao() {
    if(pImagem){
        pImagem.addEventListener('click', () => {
            sImagem.classList.remove('show');
            sImagem.classList.add('hidden');
            clique.style.display = 'none';
        });

        pImagem.addEventListener('mouseout', () => {
            sImagem.style.display = 'block';
            clique.style.display = 'block';
            setTimeout(() => {
                sImagem.classList.remove('hidden');
                sImagem.classList.add('show');
            }, 0);
        });
    }
    if(sImagem){
        sImagem.addEventListener('click', () => {
            pImagem.classList.remove('show');
            pImagem.classList.add('hidden');
            clique.style.display = 'none';
        });
        // Função para remover o efeito
        sImagem.addEventListener('mouseout', () => {
            pImagem.style.display = 'block';
            clique.style.display = 'block';
            setTimeout(() => {
                pImagem.classList.remove('hidden');
                pImagem.classList.add('show');
            }, 0);
        });
    }
}

window.addEventListener('resize', verificarResolucao);

verificarResolucao();