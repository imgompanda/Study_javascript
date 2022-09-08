// 접근자 프로퍼티(Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('형우', '박');
student.firstName = '형인';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '이경목';
