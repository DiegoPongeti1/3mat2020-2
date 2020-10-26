/*
    Estrutura de dados Fila
    Inserções ocorrem ao final da estrutura e remoções, no ínicio
    Seu funcionamento pode ser resumido pela sigla em inglês FIFO
    (First In, First Out) = o primeiro que entra é o primeiro que sai
*/
module.exports = class Queue {
    constructor(){
            this.data = {} // Armazenamento
            this.head = 0  // "Cabeça" (inicio da estrutura)
            this.tail = -1 // "Cauda" (final da estrutura)
        }

    // Inserção na fila(enfirleiramento)
    enqueue(value){
        this.tail++ // Cria uma nova posição no FINAL da estrutura 
        this.data[this.tail] = value
    }

    // Remoção da fila (desenfileiramento)
    dequeue() {
        let value = this.data[this.head]
        delete this.data[this.head] // Apagar a posição da estrutura
        this.head++ // "Anda a fila", fazendo o proximo chegar para frente 
        return value 
    }
    // "Olhadinha" no proximo a ser retirado
    peek() {
        return this.data[this.head]  // Sempre o primeiro elemento
    }

    size(){
        return this.tail - this.head + 1
    }
}