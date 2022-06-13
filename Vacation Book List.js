function vacationBookList(input){
    let numLists = Number(input[0]);
    let listPerHour = Number(input[1]);
    let numberDays = Number(input[2]);
    let neededHours = numLists / listPerHour;
    let neededHoursPerDay = neededHours / numberDays
    console.log(neededHoursPerDay)
}
vacationBookList(
    ["212 ",
"20 ",
"2 "]
)