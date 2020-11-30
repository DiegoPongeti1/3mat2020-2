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

console.log('Máximo: ', arvore.max())

arvore.insert(66)
console.log('Máximo: ', arvore.max())

vet = []
arvore.inOrderTraversal(n => vet.push(n.data))
console.log('Em-ordem', vet)

console.log('Existe 22?', arvore.search(22))
console.log('Existe 49?', arvore.search(49))
console.log('Existe 19?', arvore.search(19))

arvore.insert(29)
arvore.insert(40)
arvore.insert(75)
arvore.insert(78)
arvore.insert(68)
arvore.insert(1)

vet = []
arvore.inOrderTraversal(n => vet.push(n.data))
console.log('Em-ordem', vet)

arvore.remove(29) // Grau 0
vet = []
arvore.inOrderTraversal(n => vet.push(n.data))
console.log('Em-ordem', vet)

arvore.remove(66) // Grau 1 c/ direita
vet = []
arvore.inOrderTraversal(n => vet.push(n.data))
console.log('Em-ordem', vet)

arvore.remove(5) // Grau 1 c/ esquerda
vet = []
arvore.inOrderTraversal(n => vet.push(n.data))
console.log('Em-ordem', vet)

vet = []
arvore.preOrderTraversal(n => vet.push(n.data))
console.log('Pré-ordem antes da exclusão da raiz', vet)

arvore.remove(31) // Grau 2 (raiz!!)
vet = []
arvore.inOrderTraversal(n => vet.push(n.data))
console.log('Em-ordem', vet)

vet = []
arvore.preOrderTraversal(n => vet.push(n.data))
console.log('Pré-ordem após exclusão da raiz', vet)

arvore.remove(12) // Grau 2
vet = []
arvore.inOrderTraversal(n => vet.push(n.data))
console.log('Em-ordem', vet)
