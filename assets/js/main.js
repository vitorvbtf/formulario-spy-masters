function escopo(){

let form = document.querySelector('form')

function recebendoEvento(e) {
    e.preventDefault();
    const email = document.querySelector('#email')
    const senha = document.querySelector('#senha')
    
    console.log(`email: ${email.value}, senha: ${senha.value}`);
}



form.addEventListener('submit', recebendoEvento)
}
escopo()
