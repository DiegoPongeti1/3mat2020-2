function bubbleSort(vetor) {
    let trocas
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    do {
        passadas++
        trocas = 0

        // Percurso do vetor do início até a PENÚLTIMA (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            if(vetor[i] > vetor[i + 1]) {
                // Fazer a troca entre os elementos usando DESESTRUTURAÇÃO (destructuring)
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
            }
        }

        totalTrocas += trocas

    } while(trocas > 0)

    console.log({passadas, comparacoes, totalTrocas})
}

/*
let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 89]
console.time('Teste 1')
bubbleSort(nums)
console.timeEnd('Teste 1')
console.log(nums)
*/

/*
const empresas = require('./dados/15-mil-empresas')
console.time('Teste empresas')
bubbleSort(empresas)
console.timeEnd('Teste empresas')
console.log(empresas)
*/

const nomes = require('./dados/100-mil-nomes')

console.time('Teste nomes')
bubbleSort(nomes)
console.timeEnd('Teste nomes')
console.log(nomes)