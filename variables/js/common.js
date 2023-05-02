console.log("Hello, world");

//var 중복선언 가능, 재할당 가능, 함수레벨 스코프
var userName = "홍길동";
console.log("이름: ", userName);
var userName = "갑순이";
console.log("이름: ", userName);
userName = "갑돌이";
//let 중복선언 불가능, 재할당 가능, 블록레벨 스코프
let userAge = "280";
console.log("나이: ", userAge);
userAge = "220"
console.log("나이: ", userAge);
//const 중복선언 불가능, 재할당 불가능, 블록레벨 스코프
const userPreper = "축구";

console.log("이름: ", userName, "\n나이: ", userAge, "\n취미: ", userPreper);

function test() {
    console.log(userAge);
    let userNameMe2 = "NOH"
    if (true) {
        var userNameMe = "Subin"
    }
    console.log(userNameMe);
    console.log(userNameMe2);
}
test();

