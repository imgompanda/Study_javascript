// 사용 예제 1
function add(num1, num2) {
  console.log('function');
  return num1 + num2;
}

const result = add(1, 2);
console.log(result);

// 사용 예제 2

function fullName(firstName, lastName) {
  return `${lastName} ${firstName} ✋`;
}
let lastName = '박';
let firstName = '형우';
console.log(fullName(firstName, lastName));

let lastName2 = '김';
let firstName2 = '지예';
console.log(fullName(firstName2, lastName2));
