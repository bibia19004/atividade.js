let proximoAniversario = new Date('2024-09-30');


let dataAtual = new Date();


let diferencaTempo = proximoAniversario - dataAtual;
let diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
console.log("Diferença em dias até o próximo aniversário:", diferencaDias);


function formatarData(data) {
    let ano = data.getFullYear();
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}
console.log("Data atual no formato YYYY-MM-DD:", formatarData(dataAtual));


let novaData = new Date(dataAtual);
novaData.setDate(dataAtual.getDate() + 30);
console.log("Data atualizada com 30 dias a mais:", formatarData(novaData));
