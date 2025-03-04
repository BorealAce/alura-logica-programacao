# Resolução dos desafios do curso de lógica de programação
## Desafio 3 - Respostas
1. **Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.**
```js
let contagemCrescente = 1;
while (contagemCrescente <= 10) {
    console.log(contagemCrescente);
    contagemCrescente++;
}
```
2. **Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.**
```js
let contagemDecrescente = 10;
while (contagemDecrescente >= 0) {
    console.log(contagemDecrescente);
    contagemDecrescente--;
}
```
3. **Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.**
```js
let numero = parseInt(prompt('Digite um número para contagem regressiva:'));
while (numero >= 0) {
    console.log(numero);
    numero--;
}
```
4. **Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.**
```js
let numeroDesejado = parseInt(prompt('Digite um número para contagem progressiva:'));
let numero = 0;
while (numero <= numeroDesejado) {
    console.log(numero);
    numero++;
}
```
