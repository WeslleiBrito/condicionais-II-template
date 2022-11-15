// const idadeDependente = Number(prompt('Solicitação de depente \nQual a idade do dependente?'))

// Prática guiada if aninhado

// if(idadeDependente >= 13){
//     if(idadeDependente < 18){
//         console.log('Seu dependente já pode ter um cartão vinculado ao seu.')
//     }else{
//         console.log('Seu dependente já é maior de idade, e pode solicitar um cartão em seu próprio nome.')
//     }
// }else{
//     console.log('Consulte outra possibilidade do Labank')
// }

// ========================================================================

// Prárica guiada if usando operadores lógicos

// if(idadeDependente >= 13 && idadeDependente > 18){
//     console.log('Seu dependente pode ter um cartão vinculado ao seu.')
// }else if(idadeDependente > 17){
//     console.log('Seu dependete é maior de idade, por tanto tem direito a solicitar seu próprio cartão')
// }else{
//     console.log('Consulte outras possibilidades do Labank')
// }

// =========================================================================

// Prática guiada if ternário

// idadeDependente >= 13 && idadeDependente < 18 ? console.log('Seu dependente pode ter um cartão vinculado ao seu.'):
// console.log('Consulte outras possibilidades do Labank')

// =========================================================================================================

// Uso do switch case

// const escolhaCartao = Number(prompt('Solicitação de cartão de crédito.\n1 - Fácil\n2 - Black\n3 - Platinum\n4 - MasterGold'))

// switch(escolhaCartao){
//     case 1:
//         console.log('Parabéns seu cartão do tipo "Fácil" está sendo impresso.')
//         break
//     case 2:
//         console.log('Parabéns seu cartão do tipo "Black" está sendo impresso.')
//         break
//     case 3:
//         console.log('Parabéns seu cartão do tipo "Platinum" está sendo impresso.')
//         break
//     case 4:
//         console.log('Parabéns seu cartão do tipo "MasterGold" está sendo impresso.')
//         break
//     default:
//         console.log('Escolha uma das quatro opções disponíveis')
// }

// =====================================================================================================

// Para guardar na cabeça - Letra A

 const numero = Number(prompt('Informe um número.'))

// if(numero % 2 === 0){
//     if(numero % 3 === 0){
//         console.log(`O número ${numero} é divisível por 2 e 3.`)
//     }else{
//         console.log(`O número ${numero} é divisível apenas por 2.`)
//     }
// }else{
//     if(numero % 3 === 0){
//         console.log(`O número ${numero} é divisível apenas por 3.`)
//     }else{
//         console.log(`O número ${numero} não é divisível por 2 e nem por 3.`)
//     }
// }

// ==========================================================================

// Para guardar na cabeça - Letra B e C

if(numero % 2 === 0 && numero % 3 === 0){
    console.log(`O número ${numero} é divisível por 2 e 3.`)
    // numero === 30 ? console.log('UFA ACERTEI!'):console.log('não foi dessa vez :(')

    switch (numero){
        case 6:
            console.log('O número escolhido foi 6.')
            break
        case 12:
            console.log('O número escolhido foi 12.')
            break
        case 18:
            console.log('O número escolhido foi 18.')
            break
        case 30:
            console.log('O número escolhido foi 30.')
            break
        default:
            console.log('O numero é menor que 6 ou maior que 30.')
    }

}else{
    if(numero % 2 === 0){
        console.log(`O número ${numero} é divisível apenas por 2.`)
    }else{
        if(numero % 3 === 0){
            console.log(`O número ${numero} é divisível apenas por 3.`)
        }else{
            console.log(`O número ${numero} não é divisível por 2 e nem por 3.`)
        }
    }
    
}
