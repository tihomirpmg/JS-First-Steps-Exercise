function basketEquipment(input){
    let yearPrice = Number(input[0]);
    let sneakers = yearPrice - (yearPrice * 0.40);
    let equip = sneakers - (sneakers * 0.20);
    let ball = equip * 0.25;
    let accessories = ball * 0.20;
    let finalPrice = yearPrice + sneakers + equip + ball + accessories;
    console.log(finalPrice);
}
basketEquipment(["365"])
