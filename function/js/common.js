//선언적 함수
function sumfnc(a, b) {
    return a + b;
}
console.log("5 + 6 = "+sumfnc(5,6));

/*함수 표현식*/

//익명 함수
let sum2 = function (a, b) {
    return a + b;
}
console.log("5 + 6 = " + sum2(5, 6));

//화살표 함수
// const materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];

// console.log(materials.map(material => material.length));

let arrowFun = () => "안녕";
console.log(arrowFun());

//생성자 함수
let sum4 = Function('a','b','return a+b;' )
console.log("4 + 5 = " + sum4(4,5));