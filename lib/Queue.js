/*
    Estrutura de dados Fila
    Inserções ocorrem ao final da estrutura e remoções, no ínicio
    Seu funcionamento pode ser resumido pela sigla em inglês FIFO
    (First In, First Out) = o primeiro que entra é o primeiro que sai
*/
module.exports = class Queue {
    constructor(){
            this.data = [] // Armazenamento
        }

    // Inserção na fila(enfirleiramento)
    enqueue(value){
        this.data.push(value)
    }

    // Remoção da fila (desenfileiramento)
    dequeue() {
        return this.data.shift()
    }
    // "Olhadinha" no proximo a ser retirado
    peek() {
        return this.data[0]  // Semre o primeiro elemento
    }

    size(){
        return this.data.length
    }
}