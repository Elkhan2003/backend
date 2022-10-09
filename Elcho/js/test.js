$(window).scroll(function () {
	let sc = $(window).scrollTop();
	if (sc > 100) {
		$("#header__scroll").addClass("small");
	} else {
		$("#header__scroll").removeClass("small");
	}
});

// Import stylesheets
import './style.css';

// Write Javascript code!
// Import stylesheets
import './style.css';

// Write Javascript code!

// Задание 1
// Создайте переменную num, присвойте ей любое число, затем сравните его с числом 5, (больше, меньше или равно), результаты выведите в консоль

// ! 1
console.log("***************Задание №1***************");
function elcho_1() {
	let num = 10;
	console.log(num == 5);
}
elcho_1();
console.log("");
// todo

// Задание 2
//  Создать переменную firstName и присвоить ей ваше имя, создать переменную lastName и присвоить ей вашу Фамилию, создать переменную age и присвоить ваш возраст, затем при помощи конкатинации строк, вывести значения переменных, разделенных через пробел в консоль
// Пример: Дамир Хаваза 26

// ! 2
console.log("***************Задание №2***************");
function elcho_2() {
	let firstName = "Эльхан";
	let lastName = "Шаршенбеков";
	let age = 18;
	console.log(firstName + " " + lastName + " " + age);
}
elcho_2();
console.log("");
// todo

// Задание 3
// Вывести  окно с сообщением "Модальное окно открыто, нажмите ок"

// ! 3
console.log("***************Задание №3***************");
function elcho_3() {
	alert("Модальное окно открыто, нажмите ок");
	console.log("Модальное окно открыто, нажмите ок");
}
elcho_3();
console.log("");
// todo

// Задание 4
// Вывести окно с вопросом - "Как тебя зовут?" где можно будет ввести имя, затем имя нужно сохранить в переменную и вывести ее в консоль

// ! 4
console.log("***************Задание №4***************");
function elcho_4() {
	let elcho = "Как тебя зовут?";
	console.log(prompt(elcho));
}
elcho_4();
console.log("");
// todo

// Задание 5
// Вывести окно с текстом "Введите число", затем сравните его с числом 5, и результат выведите в консоль, если введенное число равно 5, то в консоли у вас должно быть true, если нет, то false

// ! 5
console.log("***************Задание №5***************");
function elcho_5() {
	let elcho = +prompt("Введите чисто");
	console.log(elcho === 5);
}
elcho_5();
console.log("");
// todo

// Задание 6
// Вывести в confirm окно вопрос - "Вам есть 18?", и результат вывести в alert.
// Если нажал ОК - то вывод true, если  нажал Отмена, то false

// ! 6
console.log("***************Задание №6***************");
function elcho_6() {
	let elcho = confirm("Вам 18 лет?");
	alert(elcho);
	console.log(elcho);
}
elcho_6();
console.log("");
// todo

// Задание 7
// Вывести в консоль тип числа 5, строки "Codify", null, undefined, true, false
//  При помощи оператора typeof

// ! 7
console.log("***************Задание №7***************");
function elcho_7() {
	let elcho1 = typeof 5;
	let elcho2 = typeof "Codify";
	let elcho3 = typeof null;
	let elcho4 = typeof undefined;
	let elcho5 = typeof true;
	let elcho6 = typeof false;
	console.log(
		elcho1 +
			", " +
			elcho2 +
			", " +
			elcho3 +
			", " +
			elcho4 +
			", " +
			elcho5 +
			", " +
			elcho6
	);
}
elcho_7();
console.log("");

// ?

console.log("***************ещё вариант***************");
function elcho_71() {
	console.log(typeof 5);
	console.log(typeof "Codify");
	console.log(typeof null);
	console.log(typeof undefined);
	console.log(typeof true);
	console.log(typeof false);
}
elcho_71();
console.log("");
// todo

// Задание 8
// Сложить число 10 и 5, затем умножить на 4, и затем сравнить его с числом 61, результат вывести в алерт окно

// ! 8
console.log("***************Задание №8***************");
function elcho_8() {
	let elcho1 = (10 + 5) * 4;
	let elcho2 = 61;
	let elcho3 = elcho1 == elcho2;
	alert("60 == 61" + " " + elcho3);
	console.log("60 == 61" + " " + elcho3);
}
elcho_8();
console.log("");
// todo

// Extra tasks

// Задание 1
// Сложите числа 10 и 5, и преобразуйте результат в тип данных string

// ! Ex 1
console.log("***************Ex Задание №1***************");
function ex_elcho_1() {
	let elcho = String(10 + 5);
	console.log(elcho);
}
ex_elcho_1();
console.log("");
// todo

// Задание 2
// Создайте окно с полем ввода, ввведите туда число и результат преобразуйте в тип данных number

// ! Ex 2
console.log("***************Ex Задание №2***************");
function ex_elcho_2() {
	let elcho_1 = prompt("Введите число");
	let elcho_2 = Number(elcho_1);
	console.log(elcho_2);
}
ex_elcho_2();
console.log("");
// todo

// Задание 3
// Создайте окно с полем ввода, введите туда число либо 1 либо 0 и результат преобразуйте в тип данных number, затем в тип данных boolean

// ! Ex 3
console.log("***************Ex Задание №3***************");
function ex_elcho_3() {
	let elcho1 = +prompt("Введите туда число либо 1 либо 0");
	let elcho2 = Boolean(elcho1);
	alert(elcho2);
	console.log(elcho2);
}
ex_elcho_3();
console.log("");
// todo

// Задание 1
// Создайте переменную num, присвойте ей любое число, затем сравните его с числом 5, (больше, меньше или равно), результаты выведите в консоль
// Import stylesheets
import './style.css';

// Write Javascript code!

// Задание 1
// Создайте переменную num, присвойте ей любое число, затем сравните его с числом 5, (больше, меньше или равно), результаты выведите в консоль

// ! 1
console.log("***************Задание №1***************");
function elcho_1() {
	let num = 10;
	console.log(num == 5);
}
elcho_1();
console.log("");
// todo

// Задание 2
//  Создать переменную firstName и присвоить ей ваше имя, создать переменную lastName и присвоить ей вашу Фамилию, создать переменную age и присвоить ваш возраст, затем при помощи конкатинации строк, вывести значения переменных, разделенных через пробел в консоль
// Пример: Дамир Хаваза 26

// ! 2
console.log("***************Задание №2***************");
function elcho_2() {
	let firstName = "Эльхан";
	let lastName = "Шаршенбеков";
	let age = 18;
	console.log(firstName + " " + lastName + " " + age);
}
elcho_2();
console.log("");
// todo

// Задание 3
// Вывести  окно с сообщением "Модальное окно открыто, нажмите ок"

// ! 3
console.log("***************Задание №3***************");
function elcho_3() {
	alert("Модальное окно открыто, нажмите ок");
	console.log("Модальное окно открыто, нажмите ок");
}
elcho_3();
console.log("");
// todo

// Задание 4
// Вывести окно с вопросом - "Как тебя зовут?" где можно будет ввести имя, затем имя нужно сохранить в переменную и вывести ее в консоль

// ! 4
console.log("***************Задание №4***************");
function elcho_4() {
	let elcho = "Как тебя зовут?";
	console.log(prompt(elcho));
}
elcho_4();
console.log("");
// todo

// Задание 5
// Вывести окно с текстом "Введите число", затем сравните его с числом 5, и результат выведите в консоль, если введенное число равно 5, то в консоли у вас должно быть true, если нет, то false

// ! 5
console.log("***************Задание №5***************");
function elcho_5() {
	let elcho = +prompt("Введите чисто");
	console.log(elcho === 5);
}
elcho_5();
console.log("");
// todo

// Задание 6
// Вывести в confirm окно вопрос - "Вам есть 18?", и результат вывести в alert.
// Если нажал ОК - то вывод true, если  нажал Отмена, то false

// ! 6
console.log("***************Задание №6***************");
function elcho_6() {
	let elcho = confirm("Вам 18 лет?");
	alert(elcho);
	console.log(elcho);
}
elcho_6();
console.log("");
// todo

// Задание 7
// Вывести в консоль тип числа 5, строки "Codify", null, undefined, true, false
//  При помощи оператора typeof

// ! 7
console.log("***************Задание №7***************");
function elcho_7() {
	let elcho1 = typeof 5;
	let elcho2 = typeof "Codify";
	let elcho3 = typeof null;
	let elcho4 = typeof undefined;
	let elcho5 = typeof true;
	let elcho6 = typeof false;
	console.log(
		elcho1 +
			", " +
			elcho2 +
			", " +
			elcho3 +
			", " +
			elcho4 +
			", " +
			elcho5 +
			", " +
			elcho6
	);
}
elcho_7();
console.log("");

// ?

console.log("***************ещё вариант***************");
function elcho_71() {
	console.log(typeof 5);
	console.log(typeof "Codify");
	console.log(typeof null);
	console.log(typeof undefined);
	console.log(typeof true);
	console.log(typeof false);
}
elcho_71();
console.log("");
// todo

// Задание 8
// Сложить число 10 и 5, затем умножить на 4, и затем сравнить его с числом 61, результат вывести в алерт окно

// ! 8
console.log("***************Задание №8***************");
function elcho_8() {
	let elcho1 = (10 + 5) * 4;
	let elcho2 = 61;
	let elcho3 = elcho1 == elcho2;
	alert("60 == 61" + " " + elcho3);
	console.log("60 == 61" + " " + elcho3);
}
elcho_8();
console.log("");
// todo

// Extra tasks

// Задание 1
// Сложите числа 10 и 5, и преобразуйте результат в тип данных string

// ! Ex 1
console.log("***************Ex Задание №1***************");
function ex_elcho_1() {
	let elcho = String(10 + 5);
	console.log(elcho);
}
ex_elcho_1();
console.log("");
// todo

// Задание 2
// Создайте окно с полем ввода, ввведите туда число и результат преобразуйте в тип данных number

// ! Ex 2
console.log("***************Ex Задание №2***************");
function ex_elcho_2() {
	let elcho_1 = prompt("Введите число");
	let elcho_2 = Number(elcho_1);
	console.log(elcho_2);
}
ex_elcho_2();
console.log("");
// todo

// Задание 3
// Создайте окно с полем ввода, введите туда число либо 1 либо 0 и результат преобразуйте в тип данных number, затем в тип данных boolean

// ! Ex 3
console.log("***************Ex Задание №3***************");
function ex_elcho_3() {
	let elcho1 = +prompt("Введите туда число либо 1 либо 0");
	let elcho2 = Boolean(elcho1);
	alert(elcho2);
	console.log(elcho2);
}
ex_elcho_3();
console.log("");
// todo

// ! 1
console.log("***************Задание №1***************");
function elcho_1() {
	let num = 10;
	console.log(num == 5);
}
elcho_1();
console.log("");
// todo

// Задание 2
//  Создать переменную firstName и присвоить ей ваше имя, создать переменную lastName и присвоить ей вашу Фамилию, создать переменную age и присвоить ваш возраст, затем при помощи конкатинации строк, вывести значения переменных, разделенных через пробел в консоль
// Пример: Дамир Хаваза 26

// ! 2
console.log("***************Задание №2***************");
function elcho_2() {
	let firstName = "Эльхан";
	let lastName = "Шаршенбеков";
	let age = 18;
	console.log(firstName + " " + lastName + " " + age);
}
elcho_2();
console.log("");
// todo

// Задание 3
// Вывести  окно с сообщением "Модальное окно открыто, нажмите ок"

// ! 3
console.log("***************Задание №3***************");
function elcho_3() {
	alert("Модальное окно открыто, нажмите ок");
	console.log("Модальное окно открыто, нажмите ок");
}
elcho_3();
console.log("");
// todo

// Задание 4
// Вывести окно с вопросом - "Как тебя зовут?" где можно будет ввести имя, затем имя нужно сохранить в переменную и вывести ее в консоль

// ! 4
console.log("***************Задание №4***************");
function elcho_4() {
	let elcho = "Как тебя зовут?";
	console.log(prompt(elcho));
}
elcho_4();
console.log("");
// todo

// Задание 5
// Вывести окно с текстом "Введите число", затем сравните его с числом 5, и результат выведите в консоль, если введенное число равно 5, то в консоли у вас должно быть true, если нет, то false

// ! 5
console.log("***************Задание №5***************");
function elcho_5() {
	let elcho = +prompt("Введите чисто");
	console.log(elcho === 5);
}
elcho_5();
console.log("");
// todo

// Задание 6
// Вывести в confirm окно вопрос - "Вам есть 18?", и результат вывести в alert.
// Если нажал ОК - то вывод true, если  нажал Отмена, то false

// ! 6
console.log("***************Задание №6***************");
function elcho_6() {
	let elcho = confirm("Вам 18 лет?");
	alert(elcho);
	console.log(elcho);
}
elcho_6();
console.log("");
// todo

// Задание 7
// Вывести в консоль тип числа 5, строки "Codify", null, undefined, true, false
//  При помощи оператора typeof

// ! 7
console.log("***************Задание №7***************");
function elcho_7() {
	let elcho1 = typeof 5;
	let elcho2 = typeof "Codify";
	let elcho3 = typeof null;
	let elcho4 = typeof undefined;
	let elcho5 = typeof true;
	let elcho6 = typeof false;
	console.log(
		elcho1 +
			", " +
			elcho2 +
			", " +
			elcho3 +
			", " +
			elcho4 +
			", " +
			elcho5 +
			", " +
			elcho6
	);
}
elcho_7();
console.log("");

// ?

console.log("***************ещё вариант***************");
function elcho_71() {
	console.log(typeof 5);
	console.log(typeof "Codify");
	console.log(typeof null);
	console.log(typeof undefined);
	console.log(typeof true);
	console.log(typeof false);
}
elcho_71();
console.log("");
// todo

// Задание 8
// Сложить число 10 и 5, затем умножить на 4, и затем сравнить его с числом 61, результат вывести в алерт окно

// ! 8
console.log("***************Задание №8***************");
function elcho_8() {
	let elcho1 = (10 + 5) * 4;
	let elcho2 = 61;
	let elcho3 = elcho1 == elcho2;
	alert("60 == 61" + " " + elcho3);
	console.log("60 == 61" + " " + elcho3);
}
elcho_8();
console.log("");
// todo

// Extra tasks

// Задание 1
// Сложите числа 10 и 5, и преобразуйте результат в тип данных string

// ! Ex 1
console.log("***************Ex Задание №1***************");
function ex_elcho_1() {
	let elcho = String(10 + 5);
	console.log(elcho);
}
ex_elcho_1();
console.log("");
// todo

// Задание 2
// Создайте окно с полем ввода, ввведите туда число и результат преобразуйте в тип данных number

// ! Ex 2
console.log("***************Ex Задание №2***************");
function ex_elcho_2() {
	let elcho_1 = prompt("Введите число");
	let elcho_2 = Number(elcho_1);
	console.log(elcho_2);
}
ex_elcho_2();
console.log("");
// todo

// Задание 3
// Создайте окно с полем ввода, введите туда число либо 1 либо 0 и результат преобразуйте в тип данных number, затем в тип данных boolean

// ! Ex 3
console.log("***************Ex Задание №3***************");
function ex_elcho_3() {
	let elcho1 = +prompt("Введите туда число либо 1 либо 0");
	let elcho2 = Boolean(elcho1);
	alert(elcho2);
	console.log(elcho2);
}
ex_elcho_3();
console.log("");
// todo
