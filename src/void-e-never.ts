//void

function retorno_indeterminado(): void {
    console.log('Olha! Eu não sei qual o meu retorno!')
}

//never

//situações onde não tem retorno ou são disparados erros

function nunca_retorna(): never {
    while(true){

    }
}

function dispara_erro(): never {
    throw new Error('Olha! Eu sou um erro!')
}

