let comp = 0
function buscaBinaria(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length - 1 

    while(fim > inicio) {
    // Math.floor() tira as casas decimais de um número
    let meio = Math.floor((fim + inicio) / 2)

    if(lista[meio] == valorBusca) { // Achou
        return meio
    }
    else if(valorBusca < lista[meio]) {
         // Trazendo o indicador de fim para uma posição
        // antes do meio, assim descartando todos os valores
        // que são maiores que o valor na posição média
        comp += 2
        fim = meio -1
    }
    else { valorBusca > lista[meio]
        comp += 2
        inicio = meio - 1
    }
  }
  return -1 // O valor não foi encontrado
}

const primos = require('.dados/primos')

console.time('7723')
console.log(buscaBinaria(primos, 7723))
console.timeEnd('7723')
console.log('Comparações: ', comp)

console.log('----------------------')

comp = 0
console.time('31')
console.log(buscaBinaria(primos, 31))
console.timeEnd('31')
console.log('Comparações: ',comp)

console.log('----------------------')

comp = 0
console.time('3359')
console.log(buscaBinaria(primos, 3359))
console.timeEnd('3359')
console.log('Comparações: ',comp)