"use strict";
 
window.addEventListener('load', PosElement, false);
function PosElement(EO) {
  EO = EO || window.event;
  var elements = document.getElementsByTagName('img');
  for (var i = elements.length - 1; i >= 0; i--) {
    var elem = elements[i];
    elem.style.top = elem.offsetTop + 'px';
    elem.style.left = elem.offsetLeft + 'px';
    elem.style.position = 'absolute';
    elem.onmousedown = MouseDown;
    elem.onmouseup = MouseUp;
    elem.onmouseover = MouseOver;
  }
  
  function MouseOver(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    EO.target.style.cursor = 'pointer';
  }
 
  function MouseDown(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    console.log('Жмяк на картинку');
    var dounShiftCoordX = EO.pageX - EO.target.offsetLeft;
    var dounShiftCoordY = EO.pageY - EO.target.offsetTop;
    var cont = document.getElementById('pictures');
    var pict = EO.target;
    cont.appendChild(pict);
    window.onmousemove = MouseMove; 
    function MouseMove(EO) {
      EO = EO || window.event;
      EO.preventDefault();
      console.log('Волоку картину');
 
      pict.style.top = (EO.pageY - dounShiftCoordY) + 'px';
      pict.style.left = (EO.pageX - dounShiftCoordX) + 'px';
 
    }
  }
 
  function MouseUp(EO) {
    EO.preventDefault();
    console.log('Кинул картину');
    window.onmousemove = null; 
   }
}