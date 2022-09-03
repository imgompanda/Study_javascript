// while (조건) {}
// 조건이 false가 될떄까지 {} 코드를 반복 실행

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('do-while 아직살아있다!');
  if (i === 100) {
    break;
  }
  i++;
}


// 꼭 한번은 무적권 실행
do {
  console.log('do-while 아직살아있다!');
} while (isActive);
