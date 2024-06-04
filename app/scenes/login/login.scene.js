export function LoginScene() {
    document.getElementById('root').innerHTML = `
    <form>
        <input type="email" placeholder="email">
        <input type="password" placeholder="password">
        <button type = 'submit' >Login</button>
    </form>`
}

// // //logic

// const $LoginForm = document.getElementsByTagName('form')[0]
// $LoginForm.addEventListener('submit', async (e) => {
//     e.preventDefault()

//     const $userEmail = document.getElementsByTagName('input')[0]
//     const $userPassword = document.getElementsByTagName('input')[1]

//     if (!$userEmail.value || !$userPassword.value) {
//         alert('All fields are required')
//         return;
//     }
// })

//         //fetch

//         const userLogged= await fetch('http://localhost:3000/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: $userEmail.value,
//                 password: $userPassword.value
//             })
//         })

//         if(!userLogged.ok){
//             alert("Error al crear un usuario")
//             return;
//         }

//         alert("User Created successfully")
//         navigateTo('/')
 
