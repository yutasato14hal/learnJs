const aboutMe = {
  name: 'yuta',
  age: 22,
  isStudent: true,
}

console.log(aboutMe.name);
console.log(aboutMe.age);
console.log(aboutMe.isStudent);

aboutMe.name = 'haruka'
console.log(aboutMe.name);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.push(11);
console.log(arr);
arr.pop()
console.log(arr);

const mapAdd = arr.map(function (res) { return res * 2 })
console.log(mapAdd);

const odd = arr.filter(function (oddNum) { return oddNum % 2 === 0 })
console.log(odd);

const people = [
  { name: 'Tomy', age: 21 },
  { name: 'Kabby', age: 32 },
  { name: 'Grray', age: 29 }
]
console.log(people[1].name);

people.forEach(function (person) {
  console.log(person.name + ' is ' + person.age + ' years old ');

});
const olderThan30 = people.filter(function(person) {
  return person.age >= 30;  // 年齢が30以上の人をフィルタリング
});

console.log(olderThan30);  // [{name: 'Kabby', age: 32}]

const sum = arr.reduce(function(a, b) {
  console.log(a);
  
  return a + b;  // 現在の合計に次の要素を足す
},0);  // 0は初期値

console.log(sum);  // 45