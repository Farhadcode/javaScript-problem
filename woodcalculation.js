function woodcalculator(chair,tabel , bed){
    const perChairWood = 3;
    const perTabelWood = 10;
    const perBedWood = 50;
    let chairWood = chair* perChairWood;
    let tabelWood = tabel* perTabelWood;
    let bedWood = bed* perBedWood;
    let totalWood = chairWood + tabelWood +bedWood;
    return totalWood;
}

const needadWood = woodcalculator(10,2,2);
console.log(needadWood);