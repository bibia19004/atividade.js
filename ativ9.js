function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}


function soma(a, b) {
    return a + b;
}


function multiplicacao(a, b) {
    return a * b;
}


let resultadoSoma = executaOperacao(5, 3, soma);
console.log("Resultado da soma:", resultadoSoma);


let resultadoMultiplicacao = executaOperacao(5, 3, multiplicacao);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);


function repetirOperacao(numero, operacao) {
    for (let i = 1; i <= numero; i++) {
        console.log(`Resultado da iteração ${i}:`, operacao(i));
    }
}


function dobrar(numero) {
    return numero * 2;
}


repetirOperacao(5, dobrar);


function contarOcorrencias(texto, caractere) {
    let contagem = 0;
    texto.split('').forEach(char => {
        if (char === caractere) {
            contagem++;
        }
    });
    console.log(`Número de ocorrências do caractere '${caractere}':`, contagem);
}


contarOcorrencias("exemplo de texto", "e");

