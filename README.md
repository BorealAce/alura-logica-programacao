# Resolução dos desafios do curso de lógica de programação
1. **Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".**
```js
let diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
```
2. **Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.**
```js
let numeroDigitado = Number(prompt('Digite um número:'));
if (isNaN(numeroDigitado)) {
    alert('Digite um número válido!');
} else if (numeroDigitado < 0) {
    alert('Esse número é negativo.'); 
} else if (numeroDigitado > 0) {
    alert('Esse número é positivo.');
} else {
    alert('Esse número é zero.');
}
```
3. **Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".**
```js
alert('Bem vindo ao desafio da matemática!');
let respostaUm = Number(prompt('40 x 3 ='));
let respostaDois = Number(prompt('35 x 8 ='));
let respostaTres = Number(prompt('2 x 21 ='));

let score = 0;

if (respostaUm === 120) {
    score += 50;
}
if (respostaDois === 280) {
    score += 50;
}
if (respostaTres === 42) {
    score += 50;
}

alert(`Sua pontuação foi ${score}!`);
if (score >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}
```
4. **Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.**
```js
let saldo = parseFloat(prompt('Quantos reais você tem na conta?'));

if (isNaN(saldo)){
    alert('Digite um valor válido!');
} else {
    alert(`Você possui R$${saldo.toFixed(2)} na conta!`);
}
```
5. **Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.**
```js
let nome = prompt('Digite o seu nome:');
alert(`Bem vindo(a) ao sistema ${nome}!`);
```
