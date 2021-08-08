function interestCalculation(pb,ir,t){
    
    let finalAmount = pb*(1 + (ir/100)*t);
    return finalAmount;
}
var simpleInterest = interestCalculation( 100 ,5 ,5);
console.log(simpleInterest);
