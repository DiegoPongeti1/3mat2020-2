// Declaração e inicialização de um objeto vazio
let pessoa1 = {}                 // Forma "Moderna"
let pessoa2 = new Object()      // Forma "Tradicional"

// Inicialização de objeto já com propriedades e valores
let pessoa3 = {
    //nome: atributo ou chave
    // 'fulanilson de Souza' : valor
    // atributo + valor -> propriedade
    nome: 'fulanílson de Souza',
    "data de nascimento": '1998-05-19',
    sexo: 'M',
    profissao: 'marceneiro'
}

// Exebir o valor de um atributo (nome de atributo SEM espaços)
console.log(pessoa3.nome)     // Sintaxe no ponto

// Exiber o valor de um atributo cujo nome contém espaços
console.log(pessoa3["data de nascimento"])   // Sintaxe dos colchetes

// A sintaxe dos colchetes funciona sempre, mesmo quando o nome
//do trabalho não tem espaços
console.log(pessoa3["professor"])

// Criando uma nova porpriedade em um objeto
console.log(pessoa1) // Antes
pessoa1.nome = 'Sincranílson Soares'
console.log(pessoa1) // Depois 

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')

// A criação de novas propriedades pode ser feita inclusive em
// objetios que foram inicializados com propriedades
console.log(pessoa3)  // Antes
pessoa3.altuta = 1.73
pessoa3.peso = 87
console.log(pessoa3) // Depois

// Exlusão de propriedade
delete pessoa3.sexo
console.log(pessoa3)

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')

// Listando os atributos (nomes de propriedades) de um objeto: for..in
for(let atributo in pessoa3) {
    console.log(atributo)
}

// Listar as pripriedades (atributo + valor) de um objeto
for(let atributo in pessoa3) {
    console.log('Atributo: ' + atributo + '; valor: ' + pessoa3[atributo])
}