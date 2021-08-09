const phones =[
    {name:'sumsung s10',price:45000,camera:10,storage:128},
    {name:'appo f9',price:11000,camera:10,storage:65},
    {name:'vivo y6',price:12000,camera:8,storage:32},
    {name:'realme c21',price:25000,camera:12,storage:128},
    {name:'Walton m67',price:22000,camera:15,storage:64},
]

function getPhon(phones){
   
    

    let cheapest = phones[0];
    for(const phone of phones){
        //compare price only
        if(phone.price <cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const myphon = getPhon(phones);
console.log(myphon);