import { name } from "file-loader";
import { navigateTo } from "../../Router";
import { encryptData } from "../../helpers/crypto";

export function RegisterScene() {
    const root = document.getElementById('root');
    root.innerHTML = `
    <form>
    
    <label for="name">Nombre:</label>
    <br>
    <input type = "text" placeholder= "Daniel"/>
    <br>
    <label>Email</label>
    <br>
    <input type = "email" placeholder= "halamadrid@2024.com" />
    <br>
    <label>Password</label>
    <br>
    <input type = "password" />
    <br><br>
    <button type = "submit">Create User</button>
    </form>`

    //Logic

    const $createUserForm = document.getElementsByTagName('form')[0]
    $createUserForm.addEventListener('submit', async (e) => {
        e.preventDefault()

        const $userName = document.querySelector('[type = "text"]')
        const $userEmail = document.getElementsByTagName('input')[1]
        const $userPassword = document.querySelector('[type = "password"]')

        if (!$userName.value || !$userEmail.value || !$userPassword.value) {
            alert("All fields are required")
        }

        //fetch

        const userCreated = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: $userName.value,
                email: $userEmail.value,
                password: encryptData($userPassword.value)
            })
        })

        if(!userCreated.ok){
            alert("Error al crear un usuario")
            return
        }

        alert("User Created successfully")
        navigateTo('/login')
    })
}