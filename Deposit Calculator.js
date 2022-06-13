function calcDeposit(input){
    let depositSum = Number(input[0]);
    let depositLength = Number(input[1]);
    let percent = Number(input[2]) / 100;
    let finalSum = depositSum + depositLength * ((depositSum * percent) / 12);
    console.log(finalSum)
}
calcDeposit(["200",
"3",
"5.7"])