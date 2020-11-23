const BinarySearchTree = require('./lib/BinarySearchTree')

let arvore = new BinarySearchTree()
console.log(arvore)

arvore.insert(31)
console.log(arvore)

arvore.insert(12)
console.log(arvore)

arvore.insert(49)
console.log(arvore)

arvore.insert(22)
console.log(arvore)

arvore.insert(15)
console.log(arvore)

arvore.inOrderTraversal(n => console.log(n.data))

let vet = []
arvore.inOrderTraversal(n => vet.push(n.data))
console.log('Em-ordem', vet)

vet = []
arvore.preOrderTraversal(n => vet.push(n.data))
console.log('Pré-ordem', vet)

vet = []
arvore.postOrderTraversal(n => vet.push(n.data))
console.log('Pós-ordem', vet)

console.log('Mínimo: ', arvore.min())

arvore.insert(5)
console.log('Mínimo: ', arvore.min())
