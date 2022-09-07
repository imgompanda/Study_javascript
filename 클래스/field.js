// 접근 제어자 - 캡슐화
// private{#}, public(기본), protected

class Fruit {
  #name;
  #emoji; // #을 붙인 fieldsms 외부에서 접근이 불가능함
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
console.log(apple);
