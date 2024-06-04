export function HomeScene(){
    const root = document.getElementById('root')
    const $myDiv = document.createElement('DIV')
    $myDiv.textContent = ('Hola desde HomeScene')
    root.appendChild($myDiv)
}