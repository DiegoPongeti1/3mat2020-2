let comparacoes = 0, divisoes = 0, juncoes = 0

/*
    fnComp() -> função de comparação
    Parâmetros: dois valores do vetor para serem comparados
    Retorno:
        - true, se o PRIMEIRO valor for MAIOR que o segundo
        - false, caso contrário
*/
function mergeSort(vetor, fnComp) {

    function mesclarVetores(vetEsq, vetDir) {
        let vetRes = [], posEsq = 0, posDir = 0, sobra

        while(posEsq < vetEsq.length && posDir < vetDir.length) {
            //if(vetEsq[posEsq] < vetDir[posDir]) {
            if(fnComp(vetDir[posDir], vetEsq[posEsq])) { // Parâmetros invertidos
                vetRes.push(vetEsq[posEsq])
                posEsq++
            }
            else { // vetDir[posDir] < vetEsq[posEsq]
                vetRes.push(vetDir[posDir])
                posDir++
            }
            comparacoes++
        }
        
        // Trazer para o vetRes a sobra do vetor que NÃO chegou ao final
        if(posEsq < posDir) sobra = vetEsq.slice(posEsq) // Sobra à esquerda
        else sobra = vetDir.slice(posDir) // Sobra à direita
        
        //console.log({posEsq, posDir, sobra})

        return vetRes.concat(sobra)
    }

    if(vetor.length > 1) {
        let meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio)
        let vetDir = vetor.slice(meio) // Do meio ao fim
        divisoes++
        //console.log('ANTES:', {vetor, vetEsq, vetDir})
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)
        let vetFinal = mesclarVetores(vetEsq, vetDir)
        juncoes++
        //console.log('DEPOIS:', {vetFinal, vetEsq, vetDir})
        return vetFinal
    }
    return vetor
}

//console.log(mergeSort([7, 1, 4, 0, 3, 9, 5, 8, 6, 2]))

const candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
console.log(mergeSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO))
console.timeEnd('Teste candidatos')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória usada (MB): ', memoria)
console.log({comparacoes, divisoes, juncoes})
