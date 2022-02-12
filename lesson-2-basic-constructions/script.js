var str = prompt("Введите строку", ""); 
  
function searchString(str) { 
 
    var arr = str.toLowerCase().match(/[ауоыиэяюёе]/g); 
 
    return arr.length; 
} 
  
console.log(searchString(str));

for (var i = 0; i < 1; i++) {
    var nick = prompt('Введите имя:','');
    if (nick == '' || nick == null) {
        i--, alert('Вы не ввели имя!');
    } else {     
    }
}
for (var i = 0; i < 1; i++) {
    var surname = prompt('Введите фамилию:','');
    if (surname == '' || surname == null) {
        i--, alert('Вы не ввели фамилию!');
    } else {
    }
}
for (var i = 0; i < 1; i++) {
    var secname = prompt('Введите отчество:','');
    if (secname == '' || secname == null) {
        i--, alert('Вы не ввели отчество!');
    } else {
    }
}
for (var i = 0; i < 1; i++) {
    var years = +prompt('Введите ваш возраст:','');
    if (isNaN(years) || years > 100 || years == '' || years == null) {
        i--, alert('Корректно введите возраст!');
    } else {
    }
}
var ageInDays = years*365;
var gender = confirm('Ваш пол мужской?');
    if (gender == true) {
        gender = 'Мужской';
    } else {
        gender = 'Женский';
    }
var fiveYears = years + 5;
var pension = years;
    if (pension > 63 ){
        pension = 'Да';
    } else {
        pension = 'Нет'
    }


alert('Ваше ФИО: ' + nick + ' ' + surname + ' ' + secname + '\n' + 'Ваш полный возраст в годах: ' + years + '\n' + 'Ваш возраст в днях: ' + ageInDays + '\n' + 'Через 5 лет вам будет: ' + fiveYears + '\n' + 'Ваш пол: ' + gender + '\n' + 'Вы на пенсии: ' + pension)