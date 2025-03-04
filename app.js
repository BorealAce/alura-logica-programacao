alert('Boas vindas ao jogo do numero secreto!');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute = prompt('Insira um numero entre 1 e 10');

// Se chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Voce acertou o numero secreto (${numeroSecreto}).`);
} else {
    alert('Você errou :(');
}

