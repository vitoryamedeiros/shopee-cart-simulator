import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];


console.log("\n 🛒🛒🛒 Welcome to the your Shopee Cart! 🛒🛒🛒");

const item1 = await createItem("Teclado", 69.99, 4);
const item2 = await createItem("Mouse", 41.5, 3);
const item3 = await createItem("Limpa Telas", 9.99, 2);
const item4 = await createItem("Gabinete", 112.99, 1);

//adc 2 itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

await cartService.removeItem(myCart, item2);

// mostrar o carrinho
await cartService.displayCart(myCart);

// remove 1 item
// await cartService.deleteItem(myCart, item2.name)

await cartService.calculateTotal(myCart);