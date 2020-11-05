let passadas = 0, comparacoes = 0, trocas = 0
/*
    fnComp -> função de comparação
    Recebe dois valores para comparação
    Retorna:
        - true, se o PRIMEIRO valor for MAIOR que o segundo
        - false, caso contrário
*/
function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length - 1) {
    if(fim > inicio) {      // Garante pelo menos 2 elementos na ordenação
        passadas++
        let posPivot = fim // Última posição
        let posDiv = inicio - 1
        for(let i = inicio; i < fim; i++) {
            comparacoes++
            // if(vetor[i] < vetor[posPivot]) {
            if(fnComp(vetor[posPivot], vetor[i])) {     // Parâmetros invertidos
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }
        }
        
        posDiv++ // Incremento final para encontrar a posição correta do pivô
        // Troca entre a posição da divisória e a posição do vetor
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        trocas++

        // Chamadas recursivas ao quickSort
        quickSort(vetor, fnComp, inicio, posDiv - 1)    // Lado esquerdo
        quickSort(vetor, fnComp, posDiv + 1, fim)       // Lado direito
    }
}

/*
let nums = [7, 4, 0, 8, 3, 2, 1, 9, 5, 6]
quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})
*/

let candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
//quickSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
quickSort(candidatos, (a, b) => {
    // Ordena primeiro por NR_CANDIDATO e depois por NM_CANDIDATO
    if(a.NR_CANDIDATO == b.NR_CANDIDATO) { 
        if(a.NM_CANDIDATO > b.NM_CANDIDATO) return true
        else return false
    }
    else if(a.NR_CANDIDATO > b.NR_CANDIDATO) return true
    else return false
    
})
console.timeEnd('Teste candidatos')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log(candidatos)
console.log('Memória usada (MB):', memoria)
console.log({passadas, comparacoes, trocas})