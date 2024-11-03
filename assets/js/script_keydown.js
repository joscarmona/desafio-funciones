/* ****************************************************************************************** */
/* *************************** Dashboard - JavaScript para la web *************************** */
/* ********************************** Desafío 3 - Funciones ********************************* */
/* **************************** Requerimiento 3: punto 3 y punto 4 ************************** */
/* ****************************************************************************************** */

//Variable global para guardar un color
var color

// Agrego un evento para escuchar las teclas presionadas
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'pink'
        pintar('key', color)
    } else if (event.key === 's') {
        color = 'orange'
        pintar('key', color)
    } else if (event.key === 'd'){
        color = 'skyblue'
        pintar('key',color)
    } else if(event.key === 'q'){
        addElement()
        pintar('new-element','purple')
    } else if(event.key === 'w'){
        addElement()
        pintar('new-element','gray')
    } else if(event.key === 'e'){
        addElement()
        pintar('new-element','brown')
    }
    })



//Función para pintar un determinado elemento wed
function pintar(elementId, color = 'white'){
    // Selección del elemento web div
    const divElement = document.getElementById(elementId)
    divElement.style.backgroundColor = color
}

//Función para agregar un elemento web
function addElement(){
    // Obtenemos el elemento contenedor por su ID
    const container = document.getElementById('container')
    // contenedor = document.querySelector('#contenedor')
    
    // Creamos un elemento <div>
    // const nuevoElemento = document.createElement('div')
    const newElement = document.createElement('div')

    // Asignamos un texto al nuevo elemento
    newElement.textContent = 'Elemento agregado'

    // Agregamos el nuevo elemento al contenedor
    container.appendChild(newElement)

    newElement.style.width = '200px'
    newElement.style.height = '200px'
    newElement.id = 'new-element'
}