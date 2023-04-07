// const myName = 'Vasya'

// myName = ''

// console.log(myName)

// ============================================== //

// const objectAlphabet = {
//    a: 1,
//    b: 2,
//    c: 3
// }

// const newObject = objectAlphabet

// // newObject.d = 4;

// console.log(newObject)

// Objetc це силочний тип! //
// Тут ми переприсвоюємо значення змінній objectAlphabet, бо це є силочний тип! //

// Динамічна типізація js //
// let a = 10

// a = true

// a = 'Vasya'

// a = undefined

// ================================= //
// function a() {
//    console.log('Hello')
// }

// a() // Тут виведе 'Hello'

// a = 10

// a()

// Тепер буде помилка, бо ми поміняли значення змінній ' a '! //

// ================================= //
// const a = () => {
//    console.log('Hello')
// }

// a() // Тут виведе 'Hello'

// a = 10

// // Тепер буде помилка, бо змінна const не дає переприсвоїти значення змінній ' a '! //

// a()
// ================================= //


// Об'єкти //
// Об'єкти - можна змінювати значення властивостей об'єктів//

// const myCity = {
//    city: 'Drogobych',
//    country: 'Ukraine',
//    popular: true
// }

// console.log(myCity.city)

// console.log(myCity.popular)

// myCity.city = 'Lviv'
// console.log(myCity.city)
// ================================= //

// Ми можемо також додавати нові властивості до об'єктів або міняти їх//
// const myCity = {
//    city: 'Drogobych'
// }

// myCity.country = 'Ukraine'
// myCity.popular = true
// myCity.me = 'Vasya'
// myCity.city = 'Lviv'

// console.log(myCity)
// ================================= //

// Видаляємо властивість з об'єкта опратором видалення delete //
// const myCity = {
//    city: 'Drogobych'
// }

// myCity.country = 'Ukraine'
// myCity.popular = true
// myCity.me = 'Vasya'
// myCity.city = 'Lviv'

// delete myCity.city

// console.log(myCity)
// // ================================= //

// Доступ до значення властивості з викристанням скобок //
// const myCity = {
//    city: 'Drogobych'
// }

// myCity['popular'] = true

// const countryPropertyName = 'country'
// myCity[countryPropertyName] = 'Ukraine'

// console.log(myCity)
// ================================= //

// Вкладені властивості //
// const myCity = {
//    city: 'Drogobych',
//    info: {
//       popular: true,
//       country: 'Ukraine'
//    }
// }

// console.log(myCity.info.popular)
// Верне true

// delete myCity.info['country']

// console.log(myCity)
// ================================= //

// Використання змінних //
// const name = 'Vasya'
// const yearQty = 25

// const userProfile = {
//    name: name,
//    year: yearQty,
//    hasSignedAgreement: false
// }

//    // OR SECOND SHORT OPTION //
// {
//    // name,
//    // yearQty,
//    // hasSignedAgreement: false
// }

// console.log(userProfile)
// ================================= //


// JQERY library //
// $(document).ready(function () {
//    $("button").click(function () {
//       $("#test").html('hahaha');
//    });
// });
// ==================================== //

// function thanksBtn() {
//    document.getElementById("test").innerHTML = "HELLO";
//    document.getElementById("test").style.backgroundColor = '#911';
// }