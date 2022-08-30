// 문자열 타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는법
string = '"안녕!"';
console.log(string);

string = '안녕!\n형우야!\t\t 내이름은\\\u09ac'; // 줄바꿈 탭 유니코드
console.log(string);

// 템플릿 리터럴 (Template Literal) ``
let id = '형우';
let greetings = "'안녕!, " + id + "👍\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕, ${id}👍
즐거운 하루 보내요!'`;
console.log(greetings);
