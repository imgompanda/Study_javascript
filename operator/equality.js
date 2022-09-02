// 동등 비교 관계 연산자 (Equality operators)
// == 같이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // 문자열 안의 숫자는 자동으로 숫자로 변환, 타입은 다름
console.log(2 === '2'); // 코딩을 할 떄는 타입까지 비교해주는게 보편적으로 좋음
console.log(true == 1);
console.log(true === 1);

console.clear();

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);
