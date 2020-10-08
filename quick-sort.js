 let passadas = 0, comparacoes = 0, trocas = 0
 function quickSort(vetor, inicio = 0, fim = vetor.length - 1) {
     if(fim > inicio) {
         passadas++
    let posPivot = fim// Ultima posição
    let posDiv = inicio -1 
        for(let i = inicio; i < fim; i++) {
            comparacoes++
        if(vetor[i] < vetor[posPivot]){
            posDiv++
            [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
            trocas++
        }
    }
    posDiv++ // Incremento final para encontrar a posição correta do pivô
        // Troca entre a posição da divisoria e a posição do vetor
    [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
    trocas++

        // Chamadas recursivas ao quicksort
        quickSort(vetor, inicio, posDiv - 1) // Lado esquerdo
        quickSort(vetor, posDiv + 1, fim)   // Lado direito
    }
}

// let nums = [7, 4, 0, 8, 3, 2, 1, 9, 5, 6]
// quickSort(nums)
// console.log(nums)
// console.log({passadas, comparacoes, trocas})

let nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
quickSort(nomes)
console.timeEnd('Teste nomes')
let memoria = process.memoryUsage().headUsed / 1024 / 1024 
console.log(nomes)
console.log('Memoria usada (MB):', memoria)
console.log({passadas, comparacoes, trocas})