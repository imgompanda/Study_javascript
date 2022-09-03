// 조건문 Conditional statement
// if (조건) {} 조건에 맞을때 중괄호 안을 실행
// if(조건) {} else {}
// if(조건1) {} else if (조건2) {} else {}

let if_right_fruit = 'apple';
if (if_right_fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('!!');
}

let if_wrong_fruit = 'banana';
if (if_wrong_fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('!!');
}

let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('😍');
}

if (2 > 1) {
  console.log('출력되면 안됨!');
}
