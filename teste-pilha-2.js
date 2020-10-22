const Stack = require('./lib/Stack-2')

let pilha = new Stack()
console.log(pilha)

pilha.push(34)
pilha.push(19)
pilha.push(48)

console.log(pilha)

let x = pilha.pop()

console.log(pilha)
console.log('x', x)

console.log(pilha.peek())
console.log(pilha.size())