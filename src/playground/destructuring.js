//Array Destructuring

const address = [
    '3-D mrudung',
    'Pune',
    'Maharashtra',
    '411058'
];

const [, city, state = 'Gujrat'] = address;

console.log(`You are in ${city} ${state}.`);

 const item = [
    'coffee (cold)',
    '$2.00',
    '$2.50',
    '$2.75'
 ];

 const [itemName, ,mediumPrice] = item;

 console.log(`A medium ${itemName} costs ${mediumPrice}.`);

//Object Destructuring

// const person = {
//     name: 'Shripad',
//     age: 26,
//     location: {
//         city: 'Pune',
//         temp: 36
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temprature} = person.location;

// if (city && temprature) {
//     console.log(`It's ${temprature} in ${city}`);
// }

//  const book = {
//      title: 'Batatyachi Chawl',
//      author: 'P. L. Deshpande',
//      publisher: {
//          name: 'S. Chand'
//      }
//  };

//  const {name: publisherName = 'Self Published'} = book.publisher;

//  console.log(publisherName);

