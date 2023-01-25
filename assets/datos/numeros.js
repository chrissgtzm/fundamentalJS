/*
resultado = number_1 + number_2;
resultado = number_1 * number_2;
resultado = number_1 / number_2;
resultado = number_1 + number_2;
*/
/*
let pi = Math.PI
pi = Math.round(pi)

console.log(pi)
document.write(pi)

// Raiz cuadrada
let raiz = Math.sqrt(144)

console.log(raiz)

//valorabsoluto
resultado = Math.abs(-500)
*/


let p1 = prompt('Dame el costo de la primer prenda ');
console.log(p1); // '', null
let p2 = prompt('Dame el costo de la segunda prenda ');
console.log(p2); // '', null
let p3 = prompt('Dame el costo de la tercer prenda ');
console.log(p3); // '', null
//Nos permite interactuar con respuestas de usuario
suma=Number(p1)+Number(p2)+Number(p3);
const valor =alert('El costo total de tus prendas es $'+suma)
document.write('$'+suma+"<br>");
console.log(suma); // 'true, false
condesc=suma*0.8
alert('Con el descuento del 20% es de $'+condesc)
document.write('$'+condesc+"<br>");
console.log(condesc); // 'true, false
coniva=condesc*1.16
alert('Ya consideran el IVA (16%) serian $'+coniva)
document.write('$'+coniva+"<br>"); 
console.log(coniva); // 'true, false
