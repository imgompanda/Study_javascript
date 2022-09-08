// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// 내 솔루션
// class employee {
//   constructor(name, part, workTime, pay) {
//     this.name = name;
//     this.part = part;
//     this.workTime = workTime;
//     this.pay = pay;
//   }

//   salary() {
//     console.log('한달급여  ' + this.workTime * this.pay + '원');
//   }
// }

// class FullTime extends employee {}
// const fulltime = new FullTime('박형우', '도금', 80, 10000);

// console.log(fulltime);
// fulltime.salary();

// class PartTime extends employee {}
// const partTime = new PartTime('박사랑', '품질', 50, 8000);

// console.log(partTime);
// partTime.salary();

// 솔루션

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

const gompanda = new FullTimeEmployee('형우', 'FE', 30);
const sarang = new PartTimeEmployee('사랑', 'FE', 20);
console.log(gompanda);
console.log(gompanda.calculatePay());

console.log(sarang);
console.log(sarang.calculatePay());
