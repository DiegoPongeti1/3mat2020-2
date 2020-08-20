//Declarando vetor em js
let vetor1 = [] //forma "moderna"
let vetor2 = Array() //forma "tradicional"

//declarando vetores já com valores
let vetor3 = ['azul', 'vermelhor', 'amarelo']   //"moderno"
let vetor4 = Array(1,2,3,4)

//Como adicionar novos valores a um vetor

//forma 1: push() -> adiciona novos intens AO FINAL DO VETOR

vetor1.push('laranja')
vetor1.push('melancia')

//forma 2: unshift() -> adiciona novos itens NO INICIO DO VETOR
vetor1.unshift('Jabuticaba')
vetor1.unshift('acerola')

//forma 3: splice()
// 1 parametro: posição de inserção  
// 2 parametro: quantos elementos serao apagados
// 3 parametro: item a ser inserido
vetor1.splice(3, 0, 'abacaxi')
vetor1.splice(2, 0, 'uva')
vetor1.splice(4, 1, 'maça')
console.log(vetor1)

//remoção de item de um vetor
let removido = vetor1.pop()

console.log(vetor1, removido)

//forma 2: shift() -> remove um item do INICIO do vetor

let removido3 = vetor1.shift()
let removido4 = vetor1.shift()

console.log(vetor1, removido3, removido4)

//Acrescentando mais alguns elementos para exemplificar o splice()
vetor1.push('abacate')
vetor1.push('morango')
vetor1.push('jaca')
console.log(vetor1)
//forma 3: splice -> retira itens de uma POSIÇÃO ESPECIFICA
// 1 parametro: a posição de remoção 
// 2 parametro: a quantidade de elementos a remover (> 0)
// O splice() SEMPRE retornara um VETOR como  resultado, mesmo que 
// 
let removido5 = vetor1.splice(1, 1)

console.log(vetor1, removido5)