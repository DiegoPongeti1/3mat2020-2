
    let comparacoes = 0, divisoes = 0, juncoes = 0

/*
    finComp() -> função de comparação
    Parâmetros: dois valores do vetor para serem comparados 
    Retorno:
        - true, se o primeiro valor for MAIOR que o segundo
        - false, caso contrário 
*/
    function mergeSort(vetor, fnComp) {

    function mesclarVetores(vetEsq, vetDir){
        let vetRes = [], posEsq = 0, posDir = 0, sobras
    

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        // if(vetEsq[posEsq] < vetDir[posDir]){
            if(fnComp[posDir], vetEsq[posEsq]){ // Parâmetros invertidos 
            vetRes.push(vetEsq[posDir])
            posEsq++
        } 
        else { // vetDir[posDir] < vetEsq[posEsq]
            vetRes.push(vetDir[posDir])
            posDir++
        
        }
        comparacoes ++
    }
    //Trazer para o vetRes a sobra do vetor que não chegou ao final
    if(posEqs < posDir) sobra = vetEsq.slice(posEsq) // Sobra á esquerda
    else sobra = vetDir.slice(posDir) // Sobra á direita 

//    console.log({posEsq, posDir, sobra})

    return vetRes.concat(sobra)
}

// console.log(mesclarVetores([2, 3, 5, 6, 7 ,] [8, 1, 4, 6, 8, 9]))

function mergeSort(vetor) {
    let meio = Math.floor(vetor.length / 2)
    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio) // Do meio ao fim
    divisoes++
    // console.log({vetor, vetEsq, vetDir})
    vetEsq = mergeSort(vetEsq, fnComp)
    vetDir = mergeSort(vetDir, fnComp)
    let vetFinal = mesclarVetores(vetEsq, vetDir)
    juncoes++
    // console.log('DEPOIS:', {vetFinal, vetEsq, vetDir})
    return vetFinal
    }
    return vetor
}

//  console.log(mergeSort([2, 3, 5, 8, 9, 0, 1, 4, 6, 7]))

const candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
console.log(mergeSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO))
console.timeEnd('Teste nomes')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 
console.log('Memória usada (MB): ', memoria)
console.log({comparacoes, divisoes, juncoes})