// Seleciona o elemento da seta
const seta = document.querySelector('.seta');

// Define variáveis para a posição e direção da seta
let posicao = 0;
let direcao = 1; // 1 para cima e -1 para baixo

// Função que atualiza a posição da seta
function animarSeta() {
// Altera a posição da seta
posicao += direcao * 1;

// Atualiza a posição da seta no eixo vertical
seta.style.top = posicao + 'px';

// Inverte a direção quando atinge o limite
if (posicao >= 3 || posicao <= -5) {
    direcao *= -1;
}
}

// Inicia a animação chamando a função a cada 50ms
setInterval(animarSeta, 50);

const setaoff = document.getElementById('seta');


