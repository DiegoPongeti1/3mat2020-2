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

    // Retorna o maior valor armazenado na árvore
    max() {
        let maximum = this.maxNode(this.root)
        // Se existir o nodo máximo, retorna o valor armazenado dentro dele
        if(maximum) return maximum.data
        else return null
    }

    // Busca e retorna o elemento com o maior valor dentro da árvore
    maxNode(root) {
        let maximum = this.root
        // Desce pela direita "toda a vida"
        while(maximum != null && maximum.right != null) {
            maximum = maximum.right
        }
        return maximum
    }

    // Busca por um valor na árvore e retorna true caso ele exista ou
    // false caso contrário
    search(key) {
        return this.searchNode(this.root, key)
    }

    // Busca por um nodo que contenha key, a partir de uma raiz (root), e retorna
    // true se existe ou false se não existe o nodo
    searchNode(root, key) {
        // Caso 1: a árvore está vazia
        if(root === null) return false
        
        // Caso 2: o key é MENOR que o data do node -> parte para a ESQUERDA
        if(key < root.data) return this.searchNode(root.left, key)

        // Caso 3: o key é MAIOR que o data do node -> parte para a DIREITA
        else if(key > root.data) return this.searchNode(root.right, key)

        // Caso 4: key é IGUAL ao data do node
        else return true
    }

    // Remove o nodo contendo key como data e retorna a nova raiz da árvore
    remove(key) {
        this.root = this.removeNode(this.root, key)
    }

    // Encontra o nodo com a key a partir de um root e efetua sua remoção
    removeNode(root, key) {
        // Caso 1: árvore vazia
        if(root === null) return null

        // Caso 2: o key é menor que o data da raiz -> vai para a esquerda
        else if(key < root.data) {
            root.left = this.removeNode(root.left, key)
            return root
        }

        // Caso 3: o key é maior que data da raiz -> vai a direita
        else if(key > root.data) {
            root.right = this.removeNode(root.right, key)
            return root
        }

        // Caso 4: o key é igual ao data da raiz -> ENCONTROU o nodo para remoção
        else {
            // Caso 4a: exclusão de nodo folha (grau 0)
            if(root.left == null && root.right == null) {
                root = null
                return root
            }
            // Caso 4b: exclusão de um nodo que tem subárvore à direita (grau 1)
            if(root.right != null && root.left == null) {
                root = root.right
                return root
            }
            // Caso 4c: exclusão de um nodo que tem subárvore à esquerda (grau 1)
            else if(root.left != null && root.right == null) {
                root = root.left
                return root
            }
            // Caso 4d: exclusão de nodo de grau 2
            // O nodo excluído deve ser substituído na estrutura da árvore pelo:
            // - menor nodo do lado DIREITO; ou
            // - maior nodo do lado ESQUERDO
            const minRight = this.minNode(root.right)
            console.log ({minRight})
            // Poderia ser também:
            // const maxLeft = this.maxNode(root.left)
            // O data do nodo de grau 2 é substituído pelo data do menor nodo do lado direito
            root.data = minRight.data
            // Exclusão do nodo minRight (rotina de exclusão de nodo de grau 0)
            root.right = this.removeNode(root.right, minRight.key)
            return root
        }
    }
}