const x = 0;
const y = 0;
const coordinate = { x, y }; // <- 왼쪽것을 축약함 { x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}
