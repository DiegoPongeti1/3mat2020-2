/*
    Estrutura de dados Lista Encadeada
*/

// Classe auxiliar que representa cada nodo que será inserido
// na lista encadeada
class Node {
    construtor(value) {
        this.data = value // Armazenamento
        this.next = null // Ponteiro para o próximo nodo
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null // Primeiro modo
        this.count = 0 
    }

    // inserção no final da lista 
    push(value) {
        let node = new Node(value) // Cria  novo modo

        if(this.count === 0) { // A lista ainda está vazia
            this.head = node // O novo nodo torna-se a cabeça da lista 
        }  
        else {
            // Começa a procurar a posição da cauda pela cabeça 
            let tail = this.head

            // Percurso dos nodos
            while(tail.next !== null) {
                tail = tail.next
            }

            tail.next = node // Coloca o nodo no fim da lista
        }
        this.count++
    }

    // Gera uma exibição da lista completa
    toString() {
        let res = '{ '

        // Percurso da lista ligada
        let tail = this.head
        while(tail.next !== null) {
            res += tail.data // Concatena o valor do nodo
            // Acrescenta uma virgula caso não seja o último elemento
            if(tail.next !== null) res += ', '
            tail = tail.next    // Passa ao proximo elemento
        }
        res += ' }'
        return res
    }

    // Inserção em uma posição arbitrá
    insertAt(position, value) {
        // A faixa das posições válidas para inserção vai de 0 (zero)
        // até this.count (inclusive)
        if(position >= 0 && position <= this.count) {
            let node = new Node(value) // Novo nodo

            // Caso particular: inserção em position === this.count (última posição)
            if(position === this.count) this.push(value)

            // Caso particular: position === 0 (primeira posição)
            else if(position === 0) {
                // O novo modo aponta para o nodo seguinte da cabeça atual
                node.next = this.head.next
                this.head = node // O novo nodo passa a ser a cabeça da lista
            }
        }
    }
}
