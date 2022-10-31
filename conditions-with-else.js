// задание 1
const userAge = 20;

/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан" 
  если userAge меньше 35, иначе выведет текст "не по-пацански"
*/
// тут твой код
let yes = "ты пацан";
let not = "не по-пацански";
let age = 35;
if(age > userAge){
    console.log(yes);
} else {
console.log(not);
};
//задание 2
const isUser = false;

/* 
  напиши ниже условие, которое выведет в консоль текст "привет, юзер", если 
  значение константы isTrue истинно, иначе нужно вывести "не пользователь ты мне"
*/
// тут твой код
let yesUser = "привет, юзер";
let notUser = "не пользователь ты мне";
const user = true;
if(user > isUser){
    console.log(yesUser);
} else {
console.log(notUser);
};

//задание 3
const password = "sherlock";
const realPassword = "holmes";

/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают,
   иначе необходимо вывести "неверный пароль".
*/   
// тут твой код
let pravilno = "правильный пароль";
let ne_pravilno = "неверный пароль";
if(password !== realPassword) {
    console.log(pravilno);
} else {
console.log(ne_pravilno);
};
// задание 4 (со звездочкой)
const email = "admin@intocode.ru";

/*
  напиши ниже условие, которое выведет в консоль текст "неверный эмайл" если
  в значении переменной email нет символа "@", иначе выведи "ты зареган"
  Тебе понадобится метод indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
*/
// тут твой код
let register = "ты зареган";
let no_register = "неверный эмайл";
if(email.indexOf("@") !== -1) {
  console.log(register);
} else {
console.log(no_register); 
};
// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль значение переменной x, если
  оно больше значения переменной y, иначе выведи значение переменной y
*/
// тут твой код
if(x > y) {
    console.log(x);
} else {
    console.log(y);
}
