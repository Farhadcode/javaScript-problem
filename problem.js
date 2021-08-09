// seer to moon
// problem-1

function seerToMoon(seer){
    let moonCalculation =  seer / 40;
    return moonCalculation;
}

const totalMoon = seerToMoon(120);
console.log(totalMoon);

// problem-2 total sales calculation

function totalSales(shirt,pant,shoes){
    const  shirtPrice =100;
    const pantPrice = 200;
    const shoesPrice = 500;
    let salesShirt = shirt * shirtPrice;
    let salesPant = pant * pantPrice ;
    let salesShoes = shoes * shoesPrice;
    const totalPrice = salesShirt + salesPant + salesShoes;
    return totalPrice;
}
const perDaySales = totalSales(4 ,3,2);
console.log(perDaySales);


// problem-3

function deliveryCost(quantity){
    const first100DeliveryCost = 100;
    const second100DeliveryCost = 80;
    const moreThen200DeliveryCost = 50;
    // let totalCost = 0;
    if( quantity<=1){
        return "minimum delivery quantity 1"                                     

    }
    else if(quantity<= 100){
      const costCount = quantity * first100DeliveryCost;
        return costCount;
    }
    else if( quantity<=200 ){
        const first100 = 100 * first100DeliveryCost;
        const nextCount = quantity - 100 ;
        const second100 = nextCount * second100DeliveryCost;
        const totatCost =  first100 + second100 ;
       return totatCost;                                      
    }
    else{
        const first100 = 100 * first100DeliveryCost;
        const second100 = 100 * second100DeliveryCost;
        const nextCount = quantity -200;
        const moreThen200 = nextCount * moreThen200DeliveryCost;
        const totalCost =  first100 + second100 + moreThen200 ;
        return totalCost ;

    }
}
 const yourDeliveryCost = deliveryCost('-3');
 console.log(yourDeliveryCost);


 //problem-4 
  const friends =['farhad','fahim','farhan','evan','sohan'];

 function perfectFriend(friends)