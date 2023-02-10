function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('Password').value;
    
    if(email+password === '123456' && email== '123'){
        alert('Sesión abierta')

    let boton = document.getElementById('btnlogin')
        boton.className = 'btn btn-success'
        boton.innerHTML = 'Perfil'

    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('login'))
    modal.hide()

    }else{
        alert('Intenta de nuevo')
    }
}