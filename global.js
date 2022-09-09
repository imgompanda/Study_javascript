console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num =2; console.log(num)');

console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.45')); // 문자열 안의 숫자를 숫자로 변환
console.log(parseInt('12.43')); // 문자열 안의 숫자를 정수로 변환

// URL (URI의 하위 개념 Uniform Resource identifier)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리를 해야 힘

const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
