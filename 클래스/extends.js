// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }

//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }

//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자!');
//   }
//
class Pets {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log('왕왕!');
  }
}

class Sarang extends Pets {}
const sarang = new Sarang('사랑이', '9살');
console.log(sarang);

sarang.bark();

// 구분선
class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); //super는 부모 클래스를 가리킨다.
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자!');
  }
  // 오버라이딩 over riding
  eat() {
    super.eat();
    console.log('강아지가 먹는다!');
  }
}

const dog = new Dog('하니', '형우');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
