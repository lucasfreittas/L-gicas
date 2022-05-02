const pacients = [
    {
        name: "Carlos",
        age: 25,
        weight: 98,
        height: 1.98,
    },
    {
        name: "Maria",
        age: 35,
        weight: 52,
        height: 1.64,
    },
    {
        name: "José",
        age: 48,
        weight: 87,
        height: 1.70,
    },
    {
        name: "Paula",
        age: 49,
        weight: 70,
        height: 1.78,
    },
]

const IMC = (weight, height) => {
    let calc = (weight / (height ** 2)).toFixed(2)
    return calc
}

for(let i of pacients){
    let pacient = IMC(i.weight, i.height)
    alert(`${i.name} tem o IMC de: ${pacient}`)
}