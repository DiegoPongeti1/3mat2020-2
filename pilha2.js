class Stack {
    constructor() {
        this.data = [] // Armazenamento 
    }

    // Inserção 
    push(value) {
        this.data.push(value)
    }

    // Remoção
    pop() {
        return this.data.pop()
    }

    // Verificar o último elemento ("olhadinha")
    peek() {
        return this.data[this.data.length - 1 ]
    }
    // Retorna o número de elementos da pílha 
    size() { 
        return this.data.length
    }
}

// let pilha = new Stack()
// pilha.push(10)
// pilha.push(8)
// pilha.push(15)
// pilha.push(2)
// //pilha.unshift(4)

// console.log(pilha)

// console.log(pilha.pop())
// console.log(pilha)

// console.log(pilha.peek())
// console.log(pilha)

// console.log('Tamanho: ', pilha.size())
// pilha.push(-9)
// console.log(pilha)
// console.log('Tamanho: ', pilha.size())


let texto = ' TESTE DE INVERSÃO '

let pilha = new Stack()

for(let i = 0; i < texto.length; i++) {
    // Inserindo na pílha: SEMPRE NO FINAL, usando push()
    pilha.push(texto.charAt(i))
}
console.log(pilha)

let invertido = ''

while(pilha.size() > 0) { // Enquanto a pilha não estiver vazia 
    // Retirando da pílha: SEMPRE DO FINAL, usando pop()
    invertido += pilha.pop()
}

console.log(invertido)