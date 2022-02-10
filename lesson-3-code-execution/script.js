// Homework 1
var pupils = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99,
};
function max (pupils) {
  var min = 0;
  var nick = '';
  for (pupil in pupils) {
    if (min < pupils[pupil]) {
      min = pupils[pupil];
      nick = pupil;
    }
  }
  return nick;
}
console.log(max(pupils));

// Homework 2
var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};
function multiplyNumeric (image) {
  for (key in image) {
      if (typeof image[key] === "number") {
          image[key] = image[key] * 2;
      }
  } return console.log(image);
} 
multiplyNumeric(image);

// Homework 3
var numbers = [];

do {
  var num = prompt('Введите число', '');
  var parsed = parseInt(num);
  if (!isNaN(parsed)) {
    numbers.push(parsed);
  }
} while (parsed || parsed === 0);

var sum = numbers.reduce(function (a, b) {
  return a + b;
});

alert(sum);