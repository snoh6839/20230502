
console.log(x);
var x = 10;
console.log(x);

console.log(y);
var y = function () {
    return 20;
}
console.log(y());

console.log(hoistingFunc());
function hoistingFunc() {
    return "함수 hoisting"
}