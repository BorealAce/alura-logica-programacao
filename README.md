# Resolução dos desafios do curso de lógica de programação
## Desafio 4 - Respostas
1. **Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.**
```js
console.log('Boas-vindas!');
```
2. **Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.**
```js
let nome = 'Gabriel';
console.log(`Olá ${nome}!`);
```
3. **Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".**
```js
let nome = 'Gabriel';
alert(`Olá ${nome}!`);
```
4. **Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.**
```js
let perguntaLinguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(perguntaLinguagem);
```
5. **Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.**
```js
let valor1 = 10;
let valor2 = 19;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
```
6. **Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.**
```js
let valor1 = 18;
let valor2 = 26;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
```
7. **Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.**
```js
let idadeDoUsuario = parseInt(prompt('Digite sua idade:'));
if (idadeDoUsuario >= 18) {
    console.log(`Você é maior de idade por ter ${idadeDoUsuario} anos!`);
} else {
    console.log(`Você é menor de idade por ter ${idadeDoUsuario} anos!`);
}
```
8. **Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.**
```js
let numero = parseInt(prompt('Digite um número:'));
if (isNaN(numero)) {
    console.log('Por favor, digite um número válido!');
} else if (numero > 0) {
    console.log('O número é positivo.');
} else if (numero < 0) { 
    console.log('O número é negativo.');
} else {
    console.log('O número é zero.');
}
```
9. **Use um loop while para imprimir os números de 1 a 10 no console.**
```js
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
```
10. **Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.**
```js
let nota = parseInt(prompt('Digite sua nota:'));
if (nota >= 7) {
    console.log('Aprovado.');
} else {
    console.log('Reprovado.');
}
```
11. **Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.**
```js
let numeroAleatorio = Math.random();
```
12. **Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.**
```js
let numero1a10 = parseInt(Math.random() * 10 + 1);
```
13. **Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.**
```js
let numero1a1000 = parseInt(Math.random() * 1000 + 1);
```
