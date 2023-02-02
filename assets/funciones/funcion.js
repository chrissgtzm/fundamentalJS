//funciones con saludar


function square(number) {
    return number * number;
}

function saludar(){
    document.writeln('Saludar')
}

function saludar_nombre(nombre){
    document.writeln(arguments)
    document.write ('</br>')
    document.writeln('Hola '+nombre+',¿Como estas?')

}

//funciones de flecha
let saludar_flecha = () =>{
    document.write ('</br>')
    document.writeln('Saludas desde la funcion flecha')
}


// ejercicio de horas
let fecha = new Date();
let hora = fecha.getHours()

function validar_hora(hora){
    if(hora <= 5) {
        document.writeln('Buenos días')
    }else if (hora > 5 && hora <12 ){
        document.writeln('Buenos días!!')
    }
}