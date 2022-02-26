function sum(a) {
    return function(b) {
        return a + b;
    };
}
console.log(sum(2)(2));
console.log(sum(1888)(82));
console.log(sum(38)(-15));