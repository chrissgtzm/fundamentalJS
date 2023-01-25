let number = []

let num_1 = prompt('Introduce el primer numero')
number.push(num_1)
let num_2 = prompt('Introduce el primer numero')
number.push(num_2)
let num_3 = prompt('Introduce el primer numero')
number.push(num_3)

let suma = Number(number[0]) + Number(number[1])+ parseInt(number[2])
number.push(suma)
document.write(number)