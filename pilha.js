/*
    PILHA
    - É uma estruttura de dados do tipo lista linear, mas de acesso restrito
    - Princípio de funcionamento> LIFO (Last In, First Out) - o último a entrar
      é o primeiro a sair 
    - Todas as operaçôes são realizadas na parte final da estrutura de armazenamento
*/

let texto = ' TESTE DE INVERSÃO '

let pilha = []

for(let i = 0; i < texto.length; i++) {
    // Inserindo na pílha: SEMPRE NO FINAL, usando push()
    pilha.push(texto.charAt(i))
}
console.log(pilha)

let invertido = ''

while(pilha.length > 0) { // Enquanto a pilha não estiver vazia 
    // Retirando da pílha: SEMPRE DO FINAL, usando pop()
    invertido += pilha.pop()
}

console.log(invertido)