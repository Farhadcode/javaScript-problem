const products = [
    {name:'laptop' ,price :50000 ,quantity:1},
    {name:'shirt' ,price :599 ,quantity:1},
    {name:'Watch' ,price :3790 ,quantity:1},
    {name:'phone' ,price :20000 ,quantity:1},

]

let totalPrice = 0;
for(const product of products){
    totalPrice = totalPrice + product.price;
}

console.log(totalPrice);


const shoppingCard = [
    {name:'laptop' ,price :50000 ,quantity:1},
    {name:'shirt' ,price :599 ,quantity:8},
    {name:'Watch' ,price :3790 ,quantity:3},
    {name:'phone' ,price :20000 ,quantity:2},

]

let totalShoppingPrice = 0;
for(const product of shoppingCard){
    const productTotal = product.price * product.quantity;
    totalShoppingPrice = totalShoppingPrice + productTotal;
}
console.log(totalShoppingPrice);