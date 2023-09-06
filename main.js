
const regButton = document.querySelector(".input-send")
const check_box =document.querySelector("#register-check")

regButton.addEventListener('click',escrever)

function escrever(event){
    event.preventDefault()
    const text = document.querySelector("#register-name")
    
    const senha = document.querySelector("#register-password")
    console.log(String(text.value))
    console.log(String(senha.value))
}


const listaPesosas = [
    {}
]