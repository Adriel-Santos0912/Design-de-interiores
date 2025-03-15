const pImagem = document.querySelector('#imagemProjeto2');
const sImagem = document.querySelector('#imagemProjeto3');

function verificarResolucao() {
    if(pImagem){
        pImagem.addEventListener('click', () => {
            sImagem.classList.remove('show');
            sImagem.classList.add('hidden');
        });

        pImagem.addEventListener('mouseout', () => {
            sImagem.style.display = 'block';
            setTimeout(() => {
                sImagem.classList.remove('hidden');
                sImagem.classList.add('show');
            }, 1);
        });
    }
    if(sImagem){
        sImagem.addEventListener('click', () => {
            pImagem.classList.remove('show');
            pImagem.classList.add('hidden');
        });
        // Função para remover o efeito
        sImagem.addEventListener('mouseout', () => {
            pImagem.style.display = 'block';
            setTimeout(() => {
                pImagem.classList.remove('hidden');
                pImagem.classList.add('show');
            }, 1);
        });
    }
}

window.addEventListener('resize', verificarResolucao);

verificarResolucao();