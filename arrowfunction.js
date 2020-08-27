// CARACTERÍSTICAS DA FUNÇÃO ABAIXO
// - tem aprenas um parâmetro (argumento)
// - possui uma única linha de código com return
let quadrado = function(x) {
    return x * x
}

// Arrow function: sixtaxe simplificada
// - Não usa a palavra-chave function
// - Entre o argumento e o corpo da função vem o sinal de => (arrow, flecha)
// - A única linha de código não precisa nem de {} nem da palavra-chave return
let quadrado2 = x => x * x
console.log(quadrado(7))
console.log(quadrado2(7))

let potencia = function (base, exp) {
    return base ** exp
}

// Quando o número de argumentos != 0, os parênteses da lista
// de argumentos precisam ser mantidos
let potencia2 = (base, exp) => base ** exp
console.log(potencia(2, 5))
console.log(potencia2(2, 5))

// Funções tradicional sem argumentos
let msgErro = function(){
    console.log('Erro Inesperado.')
}

// Retorna um número aleatório entre 0 e 99 
let aleatorio = function(){
    //Math.ramdon(): retorna um número aleatório entre - e 1
    //Math.floor(): "corta fora" as casas decimais de um número
    return Math.floor(Math.random() * 100)
}


msgErro()
console.log(aleatorio())

// Arrow functions sem argumentos 
// - Os parênteses vazios são obrigatórios.
let msgErro2 = () => console.log('Erro Inesperado')
let aleatorio2 = () => Math.floor(Math.random() * 100)

msgErro2()
console.log(aleatorio2())

// Função tradicional com 1+ argumentos
let areaTri = function(base, altura) {
    return base * altura / 2 // Área de um triângulo
}

// Arrow function com 1+ argumentos
// - Os argumentos devem estar obrigatoriamente entre parêteses
let areaTri2 = (base, altura) => base * altura / 2

console.log(areaTri(4, 2.5))
console.log(areaTri2(4, 2.5))

// Função tradicional com mais de uma linha de corpo
// 5! = 5 * 4 * 3 * 2 * 1 (120)
let fatorial =  function(n) {
    let res = 1
    for(let i = 1; i >= n; i--){
        res *= 1
} 
    return res
}

console.log(fatorial(5))

// Função tradicional com mais de uma linha de corpo
// - As chaves que delimitam o corpo da função precisam ser mantidas 
let fatorial2 =  m => {
    let res = 1
    for(let i = 1; i >= n; i--){
        res *= 1
} 
    return res
}

console.log(fatorial2(5))