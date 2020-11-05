/*
    Parâmetros:
    1) O vetor onde será feita a busca
    2) A posição inicial do vetor a partir da qual será feita a busca
    Retorno:
    -- A POSIÇÃO do menor valor encontrado
*/
function selectionSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    function encontrarMenor(vetor, inicio) {
        let res = inicio
        // for interno
        for(let i = inicio + 1; i < vetor.length; i++) {
            comparacoes++
            if(vetor[i] < vetor[res]) res = i
        }
        return res
    }

    // for externo -> vai da primeira à PENÚLTIMA posição
    for(let i = 0; i < vetor.length - 1; i++) {
        passadas++
        
        let posMenor = encontrarMenor(vetor, i + 1)
        
        comparacoes++
        if(vetor[i] > vetor[posMenor]) {
            // Permuta de valores via desestruturação
            [vetor[i], vetor[posMenor]] = [vetor[posMenor], vetor[i]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

//             0   1   2   3   4   5   6   7  8   9  10  11
const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]

//console.log(encontrarMenor(nums, 9))  // Deve retornar 10, que é a posição do valor 31

/*
console.time('Teste nums')
selectionSort(nums)
console.timeEnd('Teste nums')
console.log(nums)
*/

const nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
selectionSort(nomes)
console.timeEnd('Teste nomes')
// Medindo a memória empregada
const memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log(nomes)
console.log('Memória usada: (MB)', memoria)