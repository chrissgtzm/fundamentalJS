
/*
let i = 0; // Inocializacion de la variable contador
// Condicion: Meintras la variable contador sea menor de 5
while ( i < 5 ) {
    document.writeln('valor: '+i);
    i++;
}


let i = 1; 
while ( i < 10 ) {
    document.writeln(i+'-'+(11-i));
    document.writeln("</br>")
    i++;
    console.log(i)
}
*/
/* No funciono CHECAR
let i = 0; 
do {
    i++;
    document.writeln(i);
    break
} while ( i < 10);

*/

let num = prompt('Introduce un número',0)
let suma = 0
do{
    document.writeln(num)
    suma += num
    num = num--
}while (num > 0)
