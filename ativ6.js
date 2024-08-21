let pessoa = {
    nome: "João Silva",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        rua: "Rua das Flores",
        cidade: "São Paulo",
        estado: "SP"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, trabalho como ${this.profissao} e moro em ${this.endereco.cidade}.`;
    }
};


console.log("Cidade do endereço:", pessoa.endereco.cidade);


pessoa.profissao = "Gerente de Projetos";
console.log("Objeto atualizado com nova profissão:", pessoa);


pessoa.telefone = "1234-5678";
console.log("Objeto atualizado com novo telefone:", pessoa);


console.log("Apresentação da pessoa:", pessoa.apresentacao());