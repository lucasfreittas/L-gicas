numberOne = Number(prompt(`Insira o primeiro valor`))
numberTwo = Number(prompt(`Insira o segundo valor`))

const operations = {


evenOrOdd: (numberOne, numberTwo) => {
    let sum = (numberOne + numberTwo);
    
    if(sum % 2 == 0){
        alert(`A soma dos dois valores é ${sum} e é um número par`)
    }else{
        alert(`A soma dos dois valores é ${sum} e é um número ímpar`)
    }
},

calc: (numberOne, numberTwo) => {

    let sum = (numberOne + numberTwo);
        alert(`A soma dos dois valores é ${sum}`)
    let subtraction = (numberOne - numberTwo);
        alert(`A subtração dos dois valores é ${subtraction}`)
    let multiplication = (numberOne * numberTwo);
        alert(`A multiplicação dos dois valores é ${multiplication}`)
    let division = (numberOne / numberTwo).toFixed(2);
        alert(`A divisão dos dois valores é ${division}`)
    let restOfDivision = (numberOne % numberTwo);
        alert(`O resto da divisão dos dois valores é ${restOfDivision}`)
}
}

operations.calc(numberOne, numberTwo)


