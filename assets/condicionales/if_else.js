
const dinero = 1000
let retirar = prompt('¿Cuanto deseas retirar?',0);
if (retirar <= dinero){
document.writeIn('No cuentas con dinero suficiente para retirar')
}else if (retirar > 2000 && retirar <= 5000) {
document.writeIn('Se puede realizar el retiro')
}else if (retirar >= 5000){
document.writeIn('No se permite retirar mas de 5k diarios')
} 