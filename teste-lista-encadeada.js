const LinkedList = require('./lib/LinkedList')

let lista = new LinkedList()
//console.table(lista)
console.log(lista.toString(), lista.size())

lista.push(19)
console.log(lista.toString(), lista.size())

lista.push(5)
console.log(lista.toString(), lista.size())

lista.push(33)
console.log(lista.toString(), lista.size())

// Inserção na última posição
lista.insertAt(3, 50)
console.log(lista.toString(), lista.size())

// Inserção na primeira posição
lista.insertAt(0, 12)
console.log(lista.toString(), lista.size())

lista.insertAt(2, -4)
console.log(lista.toString(), lista.size())

let removido = lista.pop()
console.log(lista.toString(), {removido}, lista.size())

let outraLista = new LinkedList()
outraLista.push('amarelo')
console.log(outraLista.toString(), outraLista.size())
removido = outraLista.pop()
console.log(outraLista.toString(), {removido}, outraLista.size())

lista.insertAt(2, 21)
lista.insertAt(4, 40)
lista.push(61)
console.log(lista.toString(), lista.size())

removido = lista.removeAt(3)
console.log(lista.toString(), {removido}, lista.size())

removido = lista.removeAt(0)
console.log(lista.toString(), {removido}, lista.size())

let pos3 = lista.getAt(3)
let pos5 = lista.getAt(5)
let pos0 = lista.getAt(0)
let pos9 = lista.getAt(9)
console.log(lista.toString(), {pos3, pos5, pos0, pos9}, lista.size())

let p40 = lista.indexOf(40)
let p19 = lista.indexOf(19)
let p5 = lista.indexOf(5)
let p10 = lista.indexOf(10)
console.log(lista.toString(), {p40, p19, p5, p10}, lista.size())
