// Imprimir los numeros del 0 al 10
/*let i 
for (i=0; i<=10;i++) {
    document.write(i)
    document.write("<br>")
}

const enterprises = ['TESLA', 'AMAZON', 'MICROSOFT', 'META']
console.warn('FOR TRADICIONAL')
for (let i=0; i <enterprises.length; i++) {
    console.log(enterprises[i])
}
console.warn('FOR IN')
for(let i in enterprises) {
    console.log(enterprises[i])
}
console.warn('FOR OF')
for(let enterprise of enterprises) {
    console.log(enterprise)
} */
let i // Todo adentro de las comillas queda como texto los + concatenan el valor de la variable
for (i=1; i<=6; i++) {
    document.write('<h'+i+'>'+"Encabezado nivel " +i+ '</h'+i+'>')

}
