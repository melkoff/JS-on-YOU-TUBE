/* МУТАЦІЇ JS */
// const firstPersone = {
//    name: 'Vasa',
//    age: 25
// }

// const secondPersone = Object.assign({}, firstPersone)
// secondPersone.name = 'Dima'

// console.log(firstPersone)
// console.log(secondPersone)
// ================================================== //
// const firstPersone = {
//    name: 'Vasa',
//    age: 25,
//    color: 'blue'
// }

// const secondPersone = { ...firstPersone }
// secondPersone.color = 'red'

// console.log(firstPersone)
// console.log(secondPersone)
// ================================================== //
/*Таким способом можна ЗАПОБІГТИ МУТАЦІЇ! */
const firstPersone = {
   name: 'Vasa',
   age: 25,
   color: 'yellow'
}

const secondPersone = JSON.parse(JSON.stringify(firstPersone))

secondPersone.name = 'Dima'

console.log(firstPersone)
console.log(secondPersone)
// ================================================== //