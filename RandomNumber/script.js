let randomNumber = Math.ceil(Math.random() * 10)

let userNumber = prompt(`Adivinhe o número`)
let attempts = 1

while(userNumber != randomNumber){

    if(userNumber < randomNumber){
        userNumber = prompt(`Você errou! O número que eu pensei é MAIOR que ${userNumber}`)
    }else{
        userNumber = prompt(`Você errou! O número que eu pensei é MENOR que ${userNumber}`)
    }
    attempts++
}


alert(`Parabéns, eu pensei no número ${randomNumber} e você acertou em ${attempts} tentativas`)

