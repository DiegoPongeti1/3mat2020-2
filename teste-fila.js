const Queue = require('./lib/Queue-2')

let fila = new Queue()

console.log(fila)

fila.enqueue('Diego')
fila.enqueue('Vinicius')
fila.enqueue('Daniel')
fila.enqueue('Bruna')

console.log(fila)

let proximo = fila.dequeue()
console.log('Proximo:', proximo)
console.log(fila)

let primeiro = fila.peek()
console.log('Primeiro:', primeiro)
console.log(fila)

fila.enqueue('Bertoldo')
console.log(fila)

proximo = fila.dequeue()
console.log({proximo})
console.log(fila)