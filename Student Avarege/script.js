let student = prompt("Nome do aluno")

let grades = [
    {grade: Number(prompt("Insira sua N1"))},
    {grade: Number(prompt("Insira sua N2"))},
    {grade: Number(prompt("Insira sua N3"))},
]

function avarege(grades){
let total = 0

for(let i = 0; i < grades.length; i++){
    let number = grades[i].grade
    total += number  
}

let avarege = (total / grades.length).toFixed(1)


if(avarege > 6){
    alert(`Parabens! Você está aprovado. Sua nota foi de: ${avarege}`)
}else if(avarege < 3){
    alert(`Você foi reprovado, sua nota foi de: ${avarege}`)
}else{
    alert(`Estude mais! Você está de recuperação, sua nota foi de: ${avarege}`)
}
}

avarege(grades)
