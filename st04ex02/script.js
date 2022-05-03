const students = [
    {
        name: "Rebeca",
        n1: 8,
        n2: 10,
    },
    {
        name: "Pablo",
        n1: 5,
        n2: 6,
    },
    {
        name: "João",
        n1: 10,
        n2: 4,
    },
    {
        name: "Tabata",
        n1: 5,
        n2: 8,
    },
]

const grades = {

    avarege: (n1, n2) => {
        let avarege = (n1 + n2) / 2
        return avarege
    },

    situation: (avarege, name) => {
        if(avarege >= 7){
            alert(`A média do(a) aluno(a) ${name} é: ${avarege}
Parabens, ${name}! Você foi aprovado(a) no concurso!`)
        }else{
            alert(`A média do(a) aluno(a) ${name} é: ${avarege}
Não foi dessa vez, ${name}! Tente novamente!`)
        }
    }
    
}



for(let student of students){
    let avarege = grades.avarege(student.n1, student.n2)
    grades.situation(avarege, student.name)
}

