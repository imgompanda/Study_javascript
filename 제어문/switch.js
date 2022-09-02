// 조건문 Conditional statement
// Switch
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우

let day = 10; // 0:월요일...6:일요일
let dayName;
switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당하는 요일이 없음!');
}
console.log(dayName);

// break 사용하지 않는 경우
let condition = 'good'; // okay, good -> 좋음!. bad -> 나쁨! (하나 이상의 여러가지 케이스가 동일한 코드를 수행하는 경우)
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
}

console.log(text);
