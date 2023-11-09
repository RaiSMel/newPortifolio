import { enviarBanco } from "./firestore.js"

export const mensagem = () => {
    let enviar = document.querySelector(".me__botao") 

    enviar.addEventListener('click', (e) => {
        e.preventDefault()
        let information = {
            nome: document.querySelector("#nome").value,
            email: document.querySelector("#email").value,
            mensagem: document.querySelector("#mensagem").value
        }
        enviarBanco(information)
    })

}