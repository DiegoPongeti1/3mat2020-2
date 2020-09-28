
    let comparacoes = 0, divisoes = 0, juncoes = 0
    function mergeSort(vetor) {

    function mesclarVetores(vetEsq, vetDir){
        let vetRes = [], posEsq = 0, posDir = 0, sobras
    

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(vetEsq[posEsq] < vetDir[posDir]){
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
    if(vetor.length > 1) {
    let meio = Math.floor(vetor.length / 2)
    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio) // Do meio ao fim
    divisoes++
    console.log({vetor, vetEsq, vetFim})
    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)
    let vetFinal = mesclarVetores(vetEsq, vetDir)
    juncoes++
    // console.log('DEPOIS:', {vetFinal, vetEsq, vetDir})
    return vetFinal
    }
    return vetor
}

//  console.log(mergeSort([2, 3, 5, 8, 9, 0, 1, 4, 6, 7]))

const nomes = require('./dados/100-mil-nomes')
console.time('Teste nome')
console.log(mergeSort(nomes))
console.timeEnd('Teste nomes')
let memoria = process.memoryUsage.heapUsed / 1024 / 1024 
console.log('Memória usada (MB): ', memoria)
console.log({comparacoes, divisoes, juncoes})