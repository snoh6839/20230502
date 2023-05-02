console.log("---- js 기본 타입들 ----");

// number
let numOne = 1;
console.log("data: ", numOne, ", type: ",typeof(numOne));

// string
let stringGreet = "안녕하세요";
console.log("data: ", stringGreet, ", type: ",typeof (stringGreet));

// boolean
let booleanTr = true;
console.log("data: ", booleanTr, ", type: ",typeof (booleanTr));

// null
let nullTest = null;
console.log("data: ", nullTest,", type: ",typeof (nullTest));

// undifined 
let undifinedTest;
console.log("data: ", undifinedTest,", type: ",typeof (undifinedTest));

// symbol
const S_CONST = Symbol("symbol test");
console.log("data: ", S_CONST,", type: ",typeof (S_CONST));

/* JSON javascript object notation*/
console.log("\n\n---- javascript object notation ----");
let objOne = {
    userName: "홍길동",
    userGender: "남자"
}
console.log("객체:", objOne, ", 객체의 키값 1. userName: ", objOne.userName);
console.log("2. userGender: ", objOne.userGender);

let objTwo = {
    addr1: "대구시",
    addr2: {
        a: "북구",
        b: "중구"
    },
    testfun: function () {
        console.log("func")
    }
}
console.log("객체:", objTwo.testfun, "\n, 1. addr1: ", objTwo.addr1, "2. addr2.b:", objTwo.addr2.b);

// array
let arrFruit = ["딸기","참외","수박"];
console.log("배열 0: ", arrFruit[0], ",  1:", arrFruit[1], ", 2:", arrFruit[2]);


