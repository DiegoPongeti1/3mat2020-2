/*
    Estruturas de dados Deque 
    DEQue = Double Ended Queue (fila de duas pontas)
*/
module.exports = class Deque {
    constructor() {
        this.data = []      // Armazenamento 
    }

    inserFront(value) {     // Inserção no inicio
        this.data.unshift(value)
    }

    insertRear(value) {     // Inserção no final
        this.data.push(value)
    }      

    removeFront() {         // Remove do inicio
       return this.data.shift()
    }

    removeRear() {          // Remoção do final
        return this.data.pop()
    }

    peekFront() {           // "Olhadinha" no inicio
        return this.data[0]
    }

    peekRear() {            // "Olhadinha" no final
        return this.data[this.data.length - 1]
    }

    size() {
        return this.data.length
    }
}