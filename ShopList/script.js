

/* Capturar 10 itens de compra e imprimi-los na tela */ 

let items = [];

for(let i = 0; i < 10; i++){
    let itemName = prompt(`Adicione o item ${i + 1}`)
    items[i] = itemName
}

alert(items)
