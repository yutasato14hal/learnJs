class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `私は${this.name},${this.age}歳です`
  }
}
const person1 = new Person('Yuta', 22);
console.log(person1.introduce());

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterOdds = numbers.filter(function (filterOdd) {
  return filterOdd % 2 === 0
})
const reduceOdds = filterOdds.map(function (num) { return num * 2 }).reduce(function (a, b) {
  return a + b
})
console.log(filterOdds);
console.log(reduceOdds);
