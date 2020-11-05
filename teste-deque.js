const Deque = require('./lib/Deque2.js')

let fila = new Deque()

// Inserções ao final da fila (como uma fila tradicional)
fila.insertRear('Diego')
fila.insertRear('Ana')
fila.insertRear('Daniel')
fila.insertRear('Vinicius')

console.log(fila)

// Fura-fila: inserção no início
fila.inserFront('Marizete')

console.log(fila)

// Desistência: remoção do final da fila
let desistente = fila.removeRear()

console.log({desistente})
console.log(fila)

// Fura-fila
fila.inserFront('Alípio')
console.log(fila)

// Inserindo no final da fila
fila.insertRear('Otilia')
console.log(fila)

//Removendo do inicio da fila
let removido = fila.removeFront()
console.log({removido})
console.log(fila)