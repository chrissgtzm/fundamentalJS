let currencies = ['MXN','USD','EUR','CAD']
console.log(currencies)

//CONOCER el size de un arreglo
let size = currencies.length;

//si quiero acceder a la ultima posicion del arreglo
let last = currencies [currencies.length-1]
console.log(last)


//crear un nuevo valor en el arreglo, el metodo push mete un
// nuevo valor al arreglo y regresa el size
let new_length = currencies.push('JPY')
console.log(new_length, currencies)

//agrega un valor al inicio de un arreglo
let add_init = currencies.unshift('NZD')

//Borra la ultima posicion
let delete_last_pos = currencies.pop() 

//Borra el valor de una posicion determinada
let delete_last_pos_esp = currencies.splice(1,2)

//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
let currency_pos = currencies.indexOf('EUR')

