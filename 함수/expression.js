// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// 위 코드를 간단한게 표현 할 수도있다.

add2 = (a, b) => a + b;
console.log(add2(1, 2));

// 생성자 함수 const object = new function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)-즉각적으로 호출_프론트엔드에서 가끔 쓰임
(function run() {
  console.log('😀');
})();
