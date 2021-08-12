const products = [
    {name:'sumsung s10 phone',price:45000},
    {name:' dell laptop',price:111000},
    {name:'vivo y6 phone',price:12000},
    {name:'realme c21 watch',price:2000},
    {name:'walton m67 phone',price:22000},
    {name:' Hp laptop',price:121000},
    {name:'apple  watch',price:5000},
]

function searchProducts(products , searchText){

    const matched = [] ;

    for(const product of products){
        const name = product.name;
        if(name.indexOf('watch') !=-1){

            // console.log(name);
            // matched.push(name);
            matched.push(product);
        }

    }
   return matched;
}
const matched  = searchProducts(products);
console.log(matched);

// for(const product of products ){
//     if(product.price < 10000){
//         break;
//     }

//     console.log(product);
// }

for(const richeMan of products){
    if (richeMan.price < 10000){
        continue;
    }
    console.log(richeMan);
}
