const quantidadeCartas = Number(prompt("Com quantas cartas quer jogar, só vale em par,de 4 a 14."));
while (quantidadeCartas < 4 || quantidadeCartas > 14 || quantidadeCartas%2 === 1) {
    alert('Número inválidos, escolher outro numero! ');
    quantidadeCartas = Number(prompt("Com quantas cartas quer jogar, só vale em par,de 4 a 14."));
};

const frentecartas = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];

const baralho1 = document.querySelector('.baralho');

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

function revelarCarta ({target}) {
    target.parentNode.classList.add('revelarCarta');
}
