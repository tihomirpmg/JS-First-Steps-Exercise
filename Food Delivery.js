function foodDelivery(input){
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let veggieMenu = 8.15;
    let orderChicken = input[0] * chickenMenu;
    let orderFish = input[1] * fishMenu;
    let orderVeggie = input[2] * veggieMenu;
    let sumOrder = orderChicken + orderFish +  orderVeggie;
    let desert = sumOrder * 0.20;
    let finalSum = sumOrder + desert + 2.50;
    console.log(finalSum)
}
foodDelivery(
    ["2 ",
"4 ",
"3 "]

)