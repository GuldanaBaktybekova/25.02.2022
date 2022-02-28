// let fruits = ["apple", "banana", "qiwi", "peach"]
// fruits.forEach((item) =>  {
//   console.log(item);
// });

// let fruits = [
//   "apple",

//   "banana",
//   false,
//   13,
//   "hello",

//   ["1", "2", "3"],
//   { name: "Peter", lastname: "Parker" },
//   123445,
// ];

// fruits.forEach((item => {
//   console.log(typeof(item));
// }));


let people =[
  {
    name: "Peter",
    lastname: "Parker",
    age: 34
  },
  {
    name: "Lasley",
    lastname: "Johnson",
    age: 55
  },
  {
    name: "Sam",
    lastname: "Cruz",
    age: 11
  },
  {
    name: "Sadyr",
    lastname: "Japarov",
    age: 44
  },
  {
    name: "Elon",
    lastname: "Mask",
    age: 51
  }
]


let div = document.querySelector('div');
people.forEach(people => {
  let div  = document.createElement('div')
  let name = document.createElement('div');
  let lastname = document.createElement('div');
  let age = document.createElement('div');
  
});
