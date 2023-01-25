const type_payment = 'cash'

switch (type_payment) {
    case 'cash':
    document.writeln('Tipo de pago con efectivo');
    break;
    case 'cc':
    document.writeln('Tipo de pago con tarjeta de crédito');
    break;
    default :
    Document.writeln('Sin tipo de pago');
    break;
}