
let calificacion = prompt('¿Cual es tu calificación?',0);
calificacion = parselnt(calificacion);
if (calificacion > 0 && calificacion < 6){
confirm('Reprobado');
}else if (calificacion > 6 && calificacion < 8) {
document.writeln('Aprobado con condicional');
}else if (calificacion > 8 && calificacion < 10){
document.writeln('Aprobado');
} else if (calificacion > 10){
    document.writeln('No valido');
 } 6