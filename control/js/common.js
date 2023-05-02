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
let numTwo = 2;
let numOne = 1;
console.log("구구단 " + numTwo +" 단");
do {
    let multi = numTwo * numOne;
    console.log(numTwo+ "X"+ numOne +"="+ multi);
    numOne++;
} while (numOne <= 9);
//for
//나무의 높이를 지정한다.
const height = 12;
// 나무의 가장 넓은 부분의 너비를 계산한다.
const max_width = height * 2 - 1;

// 나무를 그린다.
for (let i = 1; i <= height; i++) {
    // 나무의 가장 넓은 부분에서부터 시작하여 나뭇잎을 그린다.
    let leaves = "*".repeat(i * 2 - 1);

    // 나뭇잎 사이에 공백을 삽입한다.
    let padding = " ".repeat((max_width - leaves.length) / 2);

    // 공백과 나뭇잎을 조합하여 출력한다.
    console.log(padding + leaves + padding);
}

// 나무의 기둥을 그린다.
let trunk_height = Math.floor(height / 6);
let trunk_width = Math.floor(height / 4);

for (let i = 1; i <= trunk_height; i++) {
    let padding = " ".repeat((max_width - trunk_width) / 2);
    console.log(padding + "*".repeat(trunk_width) + padding);
    console.log(padding + "*".repeat(trunk_width) + padding );
}

//foreach
let arr = [1,2,3,4];
arr.forEach(
    function (val, key) {
        console.log("키 : " + key + " 값 : " + val);
    }
)
//for ...in
let arr2 = {
    username: "홍길동",
    userage: 28
};
let arr3 = [4, 5, 6];
arr3.iter = 2;

for (const i in arr2) {
    console.log( "키 : "+i + " 값 : "+ arr2[i] );
}
for (const i in arr3) {
    console.log("키 :" + i + " 값 : " + arr3[i]);
}

//for ...of
for (const j of arr3) {
    console.log("값 : " + j);
}
