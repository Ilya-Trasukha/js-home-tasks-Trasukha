'use strict';
function isPal(string) {
    var Str = string.split(' ').join('').toLowerCase();
    var lastStr = Str.split('').reverse().join('');
    if (Str === lastStr) {
        return true;
    } else {
        return false;
    }
}
console.log(isPal('Anna')); 
console.log(isPal('А роза упала на лапу Азора')); 
console.log(isPal('Вася')); 
console.log(isPal('12321')); 
console.log(isPal('123212')); 