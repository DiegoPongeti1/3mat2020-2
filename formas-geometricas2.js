class FormaGeometrica {
    constructor(base, altura, tipo = 'R'){
        // isNaN() retorna true se NÃO for um valor numérico ou false, caso contrário
        if(isNaN(base) || base <= 0) {
            throw new Error('A base deve ser númerica e maior que zero')
        }
        if(isNaN(altura) || altura <= 0) {
            throw new Error ('A altura deve ser numérica e maior que zero')
        }

        if(['R', 'T', 'E'].indexOf(tipo) < 0) {
            throw new Error('O tipo de forma geométrica deve ser R, T ou E')
        }
        this.base = base 
        this.altura = altura
        this.tipo = tipo
    }

    area(){
        switch(this.tipo){
            case 'R':
                    return this.base * this.altura
            case 'T':
                    return this.base * this.altura / 2 
            case 'E':
                    return (this.base / 2) * (this.altura / 2) * Math.PI
                default:
                    return undefined
        }
    }
}

let retangulo = new FormaGeometrica(4.5, 3.75, 'R') // Novo objeto
let triangulo = new FormaGeometrica(4.5, 3.75, 'T' )
let elipse = new FormaGeometrica(4.5, 3.75, 'E')
let tchonga = new FormaGeometrica(16, -14, 'Y')



console.log(retangulo.area())
console.log(triangulo.area())
console.log(elipse.area())
console.log(tchonga.area())
