// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)이 복사되어 전달됨
let apple = {
  //ex 여기의 메모리 주소가 0x1234 라면
  name: '사과',
};

let orange = apple; //ex 여기도 메모리 주소가 0x1234 복사됨
orange.name = '오렌지';

console.log(apple);
console.log(orange);
