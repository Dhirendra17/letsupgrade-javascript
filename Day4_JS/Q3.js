console.log('Use of Soread Operator')
 let shoppingList = ['Milk','Bread','Olive Oil','Wheat'];
 //updating the list
 let shoppingBasket = [...shoppingList];
 shoppingBasket.push('Cookies');
 shoppingBasket.push('Oats');
//lets log the two arrays shoppingList and shoppingBasket
console.log(`Shopping List: ${shoppingList}`);
console.log(`Shoping Basket: ${shoppingBasket}`);
