const Stack = require('./lib/Stack2')
let analisador = new Stack()

let expr = '3 * { 5 - 2 / [3 * 4 + (12 / 5)]}'
// let expr = '8 - {5 * (3 + 7])'
let info
for(let i = 0; i < expr.length; i++){
   switch(expr.charAt(i)) {
       case '{':
            analisador.push({tipo: 'CH', pos: i})
            break;
        case '[':
            analisador.push({tipo: 'CO', pos: i})
            break;
        case '(':
            analisador.push({tipo: 'PA', pos: i})
            break;
        case '}':
            info = analisador.pop()
            if(info){       // Se retornou dados
                if(info.tipo == 'CH')
                    console.log(`Chave aberta na posição ${info.pos} e fechada na posição ${i}`)
            }
            else {
                console.log(`ERRO: chave fechando na posição ${i} não tem a abertura correpondente`)
            }
            break
              case ']':
            info = analisador.pop()
            if(info){       // Se retornou dados
                if(info.tipo == 'CO')
                    console.log(`Colchete aberta na posição ${info.pos} e fechada na posição ${i}`)
            }
            else {
                console.log(`ERRO: Colchete fechando na posição ${i} não tem a abertura correpondente`)
            }
            break
              case ')':
              console.log(analisador)
            info = analisador.pop()
            if(info){       // Se retornou dados
                if(info.tipo == 'PA')
                    console.log(`Parêntese aberta na posição ${info.pos} e fechada na posição ${i}`)
            }
            else {
                console.log(`ERRO: Parêntese fechando na posição ${i} não tem a abertura correpondente`)
            }
            break
   }

// Verifica se há restos na pilha
if(analisador.size() > 0) {
    while(analisador.size() > 0) {
        info = analisador.pop()
        switch(info.tipo) {
            case 'PA':
                console.log(`ERRO; Parêntese aberto na posição ${info.pos} não tem fechamendo correspondente`)
                break
            case 'CO':
                console.log(`ERRO; Colchete aberto na posição ${info.pos} não tem fechamendo correspondente`)
                break
            case 'CH':
                console.log(`ERRO; Chave aberta na posição ${info.pos} não tem fechamendo correspondente`)
                break 
        }
    }
}
}