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

// let people =[
//   {
//     name: "Peter",
//     lastname: "Parker",
//     age: 34
//   },
//   {
//     name: "Lasley",
//     lastname: "Johnson",
//     age: 55
//   },
//   {
//     name: "Sam",
//     lastname: "Cruz",
//     age: 11
//   },
//   {
//     name: "Sadyr",
//     lastname: "Japarov",
//     age: 44
//   },
//   {
//     name: "Elon",
//     lastname: "Mask",
//     age: 51
//   }
// ]

//My work
// let container = document.querySelector('#container');
// people.forEach((item) => {
//   let divElement  = document.createElement('div')

//   let name = document.createElement('div');
//   let lastname = document.createElement('div');
//   let age = document.createElement('div');

//   name.textContent = item.name;
//   lastname.textContent = item.lastname;
//   age.textContent = item.age;

//   divElement.append(name);
//   divElement.append(lastname);
//   divElement.append(age);
//   container.append(divElement);
// });

// let container = document.querySelector('#container');
// people.forEach((item) => {
//   let person = document.createElement("div");
//   let name = `${item.name}, `;
//   let lastname = `${item.lastname }, `;
//   let age = item.age;
//   person.append(name);
//   person.append(lastname);
//   person.append(age);
//   container.append(person);
// });

let company = [
  {
    name: "Peter",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, expedita!",
    profession: "front-end",
  },
  {
    name: "Lasley",

    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, expedita!",
    profession: "java",
  },
  {
    name: "Sam",

    resume:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, expedita!",
    profession: "3D model",
  },
]
// не правильно 
let container = document.querySelector("#container");
company.forEach((item) => {
  let person = document.createElement("div");
  let name = document.createElement("h1");
  let resume = document.createElement("p");
  let profession = document.createElement("span");

  h1.textContent = item.name;
  p.textContent = item.resume;
  span.textContent = item.profession;

  person.append(name);
  person.append(resume);
  person.append(profession);
  container.append(person);
});
