
// -> adicionar item
async function addItem(userCart, item){
    userCart.push(item);
}

// -> calcular o total
async function calculateTotal(userCart){
    console.log("🤑 Your Shopee Cart total is: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`💲R$${result}`)
}

// -> deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        userCart.splice(index, 1)
    }

}

// -> remover um item (-1)
async function removeItem(userCart, item){

    // 1. encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    // 2. caso nao encontrar o item
    if (indexFound == -1) {
        console.log("item nao encontrado");
        return;
    }

    // 3. item > 1 = subtrair item 
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -=1
        return;
    }

    // 4. caso item = 1 entao deletar item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);        
        return;

    }
}

// -> mostrar itens do carrinho
async function displayCart(userCart){
    console.log("\n Shopee Cart List ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    });
}

export {
    addItem, 
    calculateTotal, 
    deleteItem, 
    removeItem,
    displayCart
}