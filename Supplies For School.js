function suppliesForSchool(input) {
    let pensPrice = 5.80;
    let markersPrice = 7.20;
    let sprayPerLiterPrice = 1.20;
    let numPens = Number(input[0]);
    let numMarkers = Number(input[1]);
    let literSpray = Number(input[2]);
    let discount = Number(input[3]) / 100;
    let finalPrice = (numPens * pensPrice) + (markersPrice * numMarkers) + (sprayPerLiterPrice * literSpray);
    let priceDiscount = finalPrice * discount;
    let finalPriceWithDiscount = finalPrice - priceDiscount;
    console.log(finalPriceWithDiscount)
}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
)