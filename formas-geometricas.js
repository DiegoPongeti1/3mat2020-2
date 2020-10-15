/*
    Área do retângulo: base * altura
    área do triângulo: base * altura / 2
    Área do elipse: (base / 2) * (altura / 2) * P

*/

let retangulo = {
    base: 4.5,
    altura: 3.75,
    tipo: 'R'
}

let triangulo = {
    base: 4.5,
    altura: 3.75,
    tipo: 'T'
}

let elipse = {
    base: 4.5,
    altura: 3.75,
    tipo: 'E'
}

const tchonga = {
    treco: 'X',
    gambi: 'arra',
    tipo: 'T'
}
const area = forma => {
    switch(forma.tipo) {
        case 'R':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura / 2
        case 'E':
            return (forma.base / 2) * (forma.altura / 2) * Math.PI
        default: // Forma inválida
            return undefined
    
    }
}

console.log(area(retangulo))
console.log(area(triangulo))
console.log(area(elipse))