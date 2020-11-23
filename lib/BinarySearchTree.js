class Node {
    constructor(value) {
        this.data = value   // Armazenamento
        this.left = null    // Lado esquerdo
        this.right = null   // Lado direito
    }
}

module.exports = class BinarySearchTree {
    constructor() {
        this.root = null // Raiz da árvore
    }

    // Inserção de um valor na árvore
    insert(value) {
        let node = new Node(value)

        // Inserção do nodo raiz
        if(this.root === null) this.root = node
        // Percorre a árvore para encontrar o local correto de inserção
        else this.insertNode(node, this.root)
    }

    // Insere um nodo na árvore
    // Parâmetros:
    // - node: o nó a ser inserido
    // - root: a raiz da árvore ou subárvore na qual o nó será inserido
    insertNode(node, root) {
        // O valor a ser inserido é menor que valor que está na raiz
        if(node.data < root.data) {
            // Possibilidade 1: não há nada à esquerda do nó raiz.
            // Encontramos o ponto de inserção
            if(root.left === null) root.left = node
            // Possibilidade 2: o nodo à esquerda da raiz já está ocupado.
            // Chamamos, então, recursivamente, a própria função, ALTERANDO A RAIZ
            // DE REFERÊNCIA, para continuar encontrar o local de encaixe
            else this.insertNode(node, root.left)
        }
        else if(node.data > root.data) {
            if(root.right === null) root.right = node
            else this.insertNode(node, root.right)
        }
        // Note que, quando node.data === root.data NÃO FAZEMOS ABSOLUTAMENTE NADA
    }

    // Percurso em-ordem (in-order)
    inOrderTraversal(fnCallback, root = this.root) {
        if(root !== null) {
            this.inOrderTraversal(fnCallback, root.left) // Visita recursivamente o lado esquerdo
            fnCallback(root) // Visita a raiz
            this.inOrderTraversal(fnCallback, root.right) // Visita recursivamente o lado direito
        }
    }

    // Percurso pré-ordem (pre-order)
    preOrderTraversal(fnCallback, root = this.root) {
        if(root !== null) {
            fnCallback(root) // Visita a raiz
            this.preOrderTraversal(fnCallback, root.left) // Visita recursivamente o lado esquerdo
            this.preOrderTraversal(fnCallback, root.right) // Visita recursivamente o lado direito
        }
    }

    // Percurso pós-ordem (post-order)
    postOrderTraversal(fnCallback, root = this.root) {
        if(root !== null) {
            this.postOrderTraversal(fnCallback, root.left) // Visita recursivamente o lado esquerdo
            this.postOrderTraversal(fnCallback, root.right) // Visita recursivamente o lado direito
            fnCallback(root) // Visita a raiz
        }
    }
    
    // Retorna o menor valor armazenado na árvore
    min() {
        let minimum = this.minNode(this.root)
        // Se existir um nodo mínimo, retorna o valor armazenado dentro dele
        if(minimum) return minimum.data
        else return null
    }

    // Busca e retorna o nodo com o menor valor dentro da árvore
    minNode(root) {
        let minimum = this.root
        // Desce pela esquerda "toda a vida"
        while(minimum != null && minimum.left != null) {
            minimum = minimum.left
        }
        return minimum
    }
}