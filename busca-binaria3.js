let comp = 0
// inicio = 0
// fim = 12

// Implementação recursiva
// Os parâmetros inicio e fim são opcionais, assumindo valores padrao
// caso não tenham sido passados na chamada da função
    function buscaBinaria(lista, valorBusca, fnComp, inicio = 0,
         fim = lista.length - 1) {

    if (fim > inicio) {
    // Math.floor() tira as casas decimais de um número
    let meio = Math.floor((fim + inicio) / 2)


    let res = fnComp(lista[meio], valorBusca)


    if(res === 0 ) { // Achou
        comp++
        return meio
    }
    else if(res < 0) {
         // Trazendo o indicador de fim para uma posição
        // antes do meio, assim descartando todos os valores
        // que são maiores que o valor na posição média
        comp += 2
        // fim = meio -1
      return  buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
    }
    else { // res > 0
        comp += 2
        // inicio = meio - 1
        return buscaBinaria(lista, valorBusca, fnComp, inicio, meio + 1, fim)
    }

    return - 1 // O valor não foi encontrado 
  }

  let nums = [4, 16, 22, 29, 35, 44, 52, 66, 71, 80, 88, 94]

  console.log(buscaBinaria(nums, 30, (elpos, busca) => {
      if(busca === elPos) return 0
      else if (busca < elPos) return -1
      else return 1
  }))

 process.exit(0)
 

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

    }