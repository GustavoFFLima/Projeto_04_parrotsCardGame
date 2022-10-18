let quantidadeCartas = Number(prompt("Com quantas cartas quer jogar, só vale em par,de 4 a 14."));
while (quantidadeCartas < 4 ) {
    alert('Número inválidos, escolher outro numero! ');
    quantidadeCartas = prompt("Com quantas cartas quer jogar, só vale em par,de 4 a 14.");
}
while (quantidadeCartas > 14) {
    alert('Número inválidos, escolher outro numero! ');
    quantidadeCartas = prompt("Com quantas cartas quer jogar, só vale em par,de 4 a 14.");
}
