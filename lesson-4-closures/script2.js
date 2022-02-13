var obj = { 
    className: 'my open menu menu' 
};
function removeClass(obj, cls){ 
    var array = obj.className.split(" "); 
    for(var i = 0; i <array.length; i++){ 
        if(array[i] == cls){ 
            array.splice(i, 1); 
            i --; 
        } 
    } 
    obj.className = array.join(' '); 
} 
removeClass(obj, 'open');
removeClass(obj, 'menu'); 
console.log(obj.className);