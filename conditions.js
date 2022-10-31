// задание 1
const userAge = 20;

/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан" 
  если userAge меньше 35
*/
// тут твой код
let words = "ты пацан";
let mainAge = 35;
if(userAge < mainAge); {
    console.log(words);
}

//задание 2
const isAdmin = false;

/* 
  напиши ниже условие, которое выведет в консоль текст "доступ запрещен", 
  если значение константы isAdmin ложно
*/
// тут твой код
let meaning = "доступ запрещен";
let admin  = true;
if(admin > isAdmin) {
    console.log(meaning);
}

//задание 3
const password = "sherlock";
const realPassword = "holmes";

/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают.
*/   
// тут твой код
let text = "правильный пароль";
if(password == realPassword) {
    console.log(text)
  };

// задание 4
const myAge = "20";

/*
  напиши ниже условие, которое выведет в консоль текст "возраст указан верно" 
  только в том случае, если ТИПОМ переменной myAge является number.
  Тебе понадобится оператор typeof: https://learn.javascript.ru/types#type-typeof
*/
// тут твой код
let age = "возраст указан верно";
if(typeof(myAge) === Number) {
console.log(age)
};

// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль "икс меньше игрик" только 
  в том случае, если значение переменной x меньше, чем значение переменной y
*/
// тут твой код
let ravno = "икс меньше игрик";
if(x < y) {
  console.log(ravno)
};
