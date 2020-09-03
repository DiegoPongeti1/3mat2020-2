let comp = 0
function buscaBinaria(lista, valorBusca) {
    // Busca binária só funciona com uma lista preoordenada
    let inicio = 0
    let fim = lista.length - 1 

    while(fim > inicio) {
    // Math.floor() tira as casas decimais de um número
    let meio = Math.floor((fim + inicio) / 2)

    if(res === 0 ) { // Achou
        comp++
        return meio
    }
    else if(res < 0) {
         // Trazendo o indicador de fim para uma posição
        // antes do meio, assim descartando todos os valores
        // que são maiores que o valor na posição média
        comp += 2
        fim = meio -1
    }
    else { // res > 0
        comp += 2
        inicio = meio - 1
    }
    return - 1 // O valor não foi encontrado 
  }

  const listaNomes = require('./dados/lista-nomes')
  console.time('FAUSTO')
  console.log(buscaBinaria(listaNomes, 'FAUSTO', (obj, busca => {
      if(obj.fisrt_name === busca) return 0
      else if(busca < obj.fisrt_name) return -1
      else return 1
  })))
  console.timeEnd('FAUSTO')
  console.log("Comparações: ", comp)

  console.log('---------------------')

  comp = 0 
  console.time('ORSELINA')
  console.log(buscaBinaria(listaNomes, 'ORSELINA', (obj, busca => {
      if(obj.fisrt_name === busca) return 0
      else if(busca < obj.fisrt_name) return -1
      else return  1
  })))
  console.timeEnd('ORSELINA')
  console.log("Comparações: ", comp)

   console.log('---------------------')

  comp = 0 
  console.time('INSTRAGRAMILSON')
  console.log(buscaBinaria(listaNomes, 'INSTRAGRAMILSON', (obj, busca => {
      if(obj.fisrt_name === busca) return 0
      else if(busca < obj.fisrt_name) return -1
      else return 1
  })))
  console.timeEnd('INSTRAGRAMILSON')
  console.log("Comparações: ", comp)

