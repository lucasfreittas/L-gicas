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

for(let i = 0; i < pacients.length; i++){
    alert(`${pacients[i].name} tem ${pacients[i].age} anos, pesa ${pacients[i].weight} e tem ${pacients[i].height} de altura `)
}