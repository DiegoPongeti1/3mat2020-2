const Stack = require('./lib/Stack')

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