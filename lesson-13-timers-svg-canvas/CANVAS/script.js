'use strict';
var baseRadius = 200; //радиус циферблата
var numbersBaseRadius = baseRadius / 1.3; //радиус оси цифр циферблата
var circleRadius = 30; // радиус кружков с цифрами
var dotSize = 10; //размер точки в центре часов
var deg = 6;
var Canvas = document.getElementById('wrapper');
var Context = Canvas.getContext('2d');

setInterval(tickTimer, 1000);

function createWatch() {
  Context.fillStyle = 'rgb(0, 191, 255)';
  Context.beginPath();
  Context.arc(Canvas.width / 2, Canvas.height / 2, baseRadius, 0, Math.PI * 2, false);
  Context.fill();
}

function createClockFace() {
  for (var number = 1; number <= 12; number++) {
    var angle = number * 30 / 180 * Math.PI;
    var x = ((baseRadius - circleRadius) * 1.47) + Math.round(Math.sin(angle) * numbersBaseRadius);
    var y = ((baseRadius - circleRadius) * 1.47) - Math.round(Math.cos(angle) * numbersBaseRadius);
    createHourCircle(x, y);
    createHourCircleNumber(x, y, number);
  }
}

function createHourCircleNumber(circleX, circleY, num) {
  Context.font = '20px system-ui';
  Context.textAlign = 'center';
  Context.fillStyle = 'rgb(0, 255, 0)';
  Context.fillText(num, circleX, circleY);
}

function createHourCircle(circleX, circleY) {
  Context.fillStyle = 'rgb(141, 138, 138)';
  Context.beginPath();
  Context.arc(circleX, circleY, circleRadius, 0, Math.PI * 2, false);
  Context.fill();
}

function createDecorativeDot(size) {
  Context.fillStyle = 'rgb(0, 255, 0)';
  Context.beginPath();
  Context.arc(Canvas.width / 2, Canvas.height / 2, size, 0, Math.PI * 2, false);
  Context.fill();
}

function createArrow(arrowHeight, arrowWidth, color, id, rad) {
  Context.save()
  Context.translate(Canvas.width / 2, Canvas.height / 2)
  Context.id = id;
  Context.strokeStyle = color;
  Context.lineWidth = arrowWidth;
  Context.lineCap = 'round';
  Context.rotate(rad);
  Context.beginPath();
  Context.moveTo(0, 0);
  Context.lineTo(0, 0 - arrowHeight);
  Context.stroke();
  Context.restore();
}

function createDigitalWatch(now) {
  Context.font = '20px system-ui';
  Context.id = 'digital-watch';
  Context.fillStyle = 'rgb(0, 255, 0)';
  Context.fillText(now.toLocaleTimeString(), Canvas.width / 2, Canvas.height / 2 - 50);
}

function tickTimer() {
  var date = new Date();
  var hh = date.getHours() * 30 * Math.PI / 180;
  var mm = date.getMinutes() * deg * Math.PI / 180;
  var ss = date.getSeconds() * deg * Math.PI / 180;
  createWatch();
  createClockFace();
  createArrow(80, 8, 'black', 'hours', hh);
  createArrow(120, 3, 'red', 'seconds', ss);
  createArrow(100, 5, 'blsck', 'minutes', mm);
  createDigitalWatch(date);
  createDecorativeDot(dotSize);
}