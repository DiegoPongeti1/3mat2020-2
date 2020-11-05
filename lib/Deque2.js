/*
    Estruturas de dados Deque 
    DEQue = Double Ended Queue (fila de duas pontas)
*/
module.exports = class Deque {
    constructor() {
        this.data = []       // Armazenamento 
        this.head = 0        // Início
        this.tail = -1       // Fim
    }

    inserFront(value) {     // Inserção no inicio
        this.head-- // Cria uma nova posição no lado esquerdo
        this.data[this.head] = value
    }

    insertRear(value) {     // Inserção no final
        this.tail++         // Cria uma nova posição no lado direito
        this.data[this.tail] = value
    }      

    removeFront() {         // Remove do inicio
       let res = this.data[this.head]
       delete this.data[this.head]
       this.head++          // Andamos de volta para a direita após a remoção
       return res
    }

    removeRear() {          // Remoção do final
        let res = this.data[this.tail]
        delete this.data[this.tail]
        this.tail--         // Andamos de volta para a esquerda após a remoção 
        return res
    }

    peekFront() {           // "Olhadinha" no inicio
       return this.data[this.head]
    }

    peekRear() {            // "Olhadinha" no final
        return this.data[this.tail]
    }

    size() {
        return this.tail - this.head + 1
    }
}