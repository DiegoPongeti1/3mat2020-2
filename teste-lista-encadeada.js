const LinkedList = require('./lib/LinkedList')

let lista = new LinkedList()
//console.table(lista)
console.log(lista.toString())

lista.pusj(19)
console.log(lista.toString())

lista.push(5)
console.log(lista.toString())