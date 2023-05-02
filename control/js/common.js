/*condition statment*/
//if
if (1 > 0) {
    console.log("1은 0보다 크다.");
} else if (1 < 0) {
    console.log("1은 0보다 작다.");
} else {
    console.log("기타");
}

// var age = 26;
// var beverage = (age >= 21) ? "Beer" : "Juice";
// console.log(beverage);

//switch
let userAge = 30;
switch (userAge) {
    case 20:
        console.log("20살");
        break;

    default:
        console.log(userAge + "살");
        break;
}

/*loop statment*/
//while
let numZero = 0;
while ( numZero <= 3 ) {
    console.log(numZero);
    numZero++;
}
//do while
//for
//foreach
//for ...in
//for ...of