/*
   Parâmetros:
   vet: o vetor sendo processado
   posIni: a posição inicial a partir da qual vamos
      procurar o menor valor
*/
function encontrarPosMenor(vet, posIni, fnComp) {
   let posMenor = posIni
   for(let i = posIni + 1; i < vet.length; i++) {
      // if(vet[i] < vet[posMenor]) posMenor = i
      if(fnComp(vet[posMenor], vet[i])) posMenor = i
   }
   return posMenor
}

/*
   Parâmetros:
   vet: o vetor onde será operada a troca (passagem por referência)
   i, j: as posições do vetor que serão trocadas entre si
*/
function troca(vet, i, j) {
   let aux = vet[i]
   vet[i] = vet[j]
   vet[j] = aux
}

function selectionSort(vet, fnComp) {
   // Este for também só vai até o penúltimo
   for(let posIni = 0; posIni < vet.length - 1; posIni++) {
      posMenor = encontrarPosMenor(vet, posIni + 1, fnComp)
      //if(vet[posMenor] < vet[posIni]) troca(vet, posMenor, posIni)
      if(fnComp(vet[posIni], vet[posMenor])) troca(vet, posMenor, posIni)
   }
}

// let covid = require('./amostras/covid-dia1305')

// Selection sort ordenando por código IBGE do município
// selectionSort(covid, (a, b) => a.estimated_population_2019 > b.estimated_population_2019)

// console.log(covid)

/* let nums = [8, 3, 2, 9, 4, 0, 6, 5, 2, 7, 1]
//selectionSort(nums, comparaNumeros)
function comparaNumeros(a, b) {
   return a > b
}
// Usando arrow function
selectionSort(nums, (a, b) => a > b)
console.log(nums) */

 const nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
selectionSort(nomes)
console.time('Teste nomes')
// Medindo a memória empregada
const memoria = process.memoryUsage().heapused / 1024 / 1024
console.log(nomes)
console.log('Memória usada: (MB)', memoria) 