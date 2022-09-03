// 퀴즈!

let num = 2;
// num의 숫자가 짝수이면 엄지척, 홀수라면 엄지다운을 출력하도록

// if
let number = '3';
if (number % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

// ternary
let emoji = number % 2 === 0 ? '👍' : '👎';
console.log(emoji);
