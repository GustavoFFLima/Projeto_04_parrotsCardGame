const quantidadeCartas = Number(prompt("Com quantas cartas quer jogar, só vale em par,de 4 a 14."));
while (quantidadeCartas < 4 || quantidadeCartas > 14 || quantidadeCartas%2 === 1) {
    alert('Número inválidos, escolher outro numero! ');
    quantidadeCartas = Number(prompt("Com quantas cartas quer jogar, só vale em par,de 4 a 14."));
};

let contadorJogadas = 0;

const opcaoCartas = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];

let frentecartas = [];
for (let i = 0; i < quantidadeCartas/2; i++) {
    frentecartas.push(opcaoCartas[i]);
}

const baralho1 = document.querySelector('.baralho');

let primeiraRevelada = '';
let segundaRavelada = '';

function jogoConcluido () {
    const cartasReveladas = document.querySelectorAll('.revelarCartaFrente');
    if(cartasReveladas.length === quantidadeCartas) {
        alert(`Você ganhou em ${contadorJogadas*2} jogadas`);
        
    }
};

function conferindoCartas(){
    const primeiraCarta = primeiraRevelada.getAttribute('data-character');
    const segundaCarta = segundaRavelada.getAttribute('data-character');

    if (primeiraCarta === segundaCarta) {
        contadorJogadas++
        primeiraRevelada = '';
        segundaRavelada = '';

        jogoConcluido();
    } else {
        setTimeout( function tempoParaRemover() {
            primeiraRevelada.children[0].classList.remove('revelarCartaFrente');
            primeiraRevelada.children[1].classList.remove('revelarCartaAtras');
            segundaRavelada.children[0].classList.remove('revelarCartaFrente');
            segundaRavelada.children[1].classList.remove('revelarCartaAtras');

            contadorJogadas++
            primeiraRevelada = '';
            segundaRavelada = '';
        }, 1000);
    }
};

function revelarCarta ({target}) {
    if(target.parentNode.children[0].className.includes('revelarCartaFrente')) {
        return;
    }
    if (primeiraRevelada === '') {
        target.parentNode.children[0].classList.add('revelarCartaFrente');
        target.parentNode.children[1].classList.add('revelarCartaAtras');
        primeiraRevelada = target.parentNode;
    } else if (segundaRavelada === '') {
        target.parentNode.children[0].classList.add('revelarCartaFrente');
        target.parentNode.children[1].classList.add('revelarCartaAtras');
        segundaRavelada = target.parentNode;

        conferindoCartas();

    }
    
}

function baralho (frentecartas) { 

    const card = document.createElement('div');
    const frente = document.createElement('div');
    const atras = document.createElement('div');

    card.className = 'card';
    frente.className = 'frente carta';
    atras.className = 'atras carta';

    frente.style.backgroundImage = `url('src/Arquivos Úteis - Projeto 04 - Parrot Card Game/${frentecartas}')`;

    card.appendChild(frente);
    card.appendChild(atras);

    card.addEventListener('click', revelarCarta);
    card.setAttribute('data-character', frentecartas);

    return card;
}

function preparandoJogo () {

    const cartasEmDobro = [ ...frentecartas, ...frentecartas ];

    const misturarCartas = cartasEmDobro.sort( function misturar()  { return Math.random() - 0.5; });

    misturarCartas.forEach( function (frentecartas) {
        const card = baralho(frentecartas);
        baralho1.appendChild(card);
    });
};

preparandoJogo();

