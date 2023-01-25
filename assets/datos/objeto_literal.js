/*
let nombr0bjeto = {
    identificador1: valor1,
    identificador2: valor2,
    identificador_n: valor_n
}
*/
let invoice = {
    number: '1',
    client: 'LIVINGLAB',
    currency: 'USD',
    coords: {
    lat: 42.0,
    loon: -108.1
    },
    services: ['LAPTOPS','COFFE','GAS','INTERNET'],
    location: {CP: '31100', ADDRESS: 'AV AMERICAS'},
    subtotal: 500,
    IVA: 80,
}

console.log(invoice)
// Podemos acceder a metodos de diferentes maneras
console.log('Cliente:', invoice.client)
console.log('Cliente:', invoice['client'])
console.log('Latitud:', invoice.coords.lat)


//Calcula el ultimo servicio que le ofrecemos a la empresa
console.log("Ultimo Servicio")
invoice.services[invoice.services.length-1]


document.writeln(invoice.client)
document.writeln('<br>')
document.writeln("Cliente: "+invoice['client'])
document.writeln('<br> ')
document.writeln("Latidud: "+invoice.coords.lat)
document.writeln(' <br>')
document.writeln('Ultimo Servicio: '+invoice.services[invoice.services.length-1])

//
delete invoice.IVA //se usa para borrar
invoice.info='valor' //se usa para agregar