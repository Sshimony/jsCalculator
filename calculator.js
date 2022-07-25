
function clearScreen() {
   document.getElementById("result").value = "";
}

function clearScren() {
   var p = document.getElementById("result").value;
  p = reversestr(p) 
   p=p.substr(1)
   p = reversestr(p) 
   document.getElementById("result").value =p;
}

function reversestr(str) {
   var newstring="";
   for (var i = str.length - 1; i >= 0; i--) { 
      newstring += str[i];

   }
   return newstring;
}

function display(value) {
   document.getElementById("result").value += value;
}

function calculate() {
   var p = document.getElementById("result").value;
   var q = eval(p);
   document.getElementById("result").value = q;
}