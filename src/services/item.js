
// ----- CASOS DE USO ------
//-> criar item com subtotal
async function createItem(name, price, quantity){
    return {
        name,
        price,
        quantity,
        // arrowfunction p/ calcular subtotal de acordo com a quantidade
        subtotal: () => price * quantity
    }
}

export default createItem;


