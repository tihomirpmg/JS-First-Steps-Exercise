function fishTank(input){
    let percent = Number(input[3]) / 100;
    let obem = Number(input[0]) * Number(input[1]) * Number(input[2])
    let liters = obem * 0.001;
    let neededLiters = liters * (1-percent);
    console.log(neededLiters);
}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]
)