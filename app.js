alert('Boas vindas ao jogo do numero secreto!');

let numeroSecreto = 1;
console.log(numeroSecreto);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Insira um numero entre 1 e 100');

    if (chute == numeroSecreto) {
        alert(`Isso ai! Voce acertou o numero secreto (${numeroSecreto}) em ${tentativas} tentativa(as)!`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        
        tentativas++;
    }
}