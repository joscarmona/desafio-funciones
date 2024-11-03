/* ****************************************************************************************** */
/* *************************** Dashboard - JavaScript para la web *************************** */
/* ********************************** Desafío 3 - Funciones ********************************* */
/* **************************** Requerimiento 3: punto 3 y punto 4 ************************** */
/* ****************************************************************************************** */

/* *********************************************************** */
/* ************************* PUNTO 3 ************************* */
/* *********************************************************** */
// Variable global para guardar un color dado
let color

// Función para pintar un determinado elemento wed
// Se define el parámetro color con un valor por defecto, en este caso 'white'
function pintar(elementId, color = 'white'){
    // Selección del elemento web pasado como parámetro, en este caso un div
    const element = document.getElementById(elementId)
    element.style.backgroundColor = color
}

// Evento para escuchar las teclas que se presionan y se ejecutará la función en correspondencia con la tecla que se presiona
// 'a': color rosado
// 's': color naranjo
// 'd': color celeste
document.addEventListener('keydown', function (event) {
    // Si es presionada la tecla 'a'
    if (event.key === 'a') {
        color = 'pink'
        pintar('key', color)
    }
    // Si es presionada la tecla 's'
    else if (event.key === 's') {
        color = 'orange'
        pintar('key', color)
    }
    // Si es presionada la tecla 'd'
    else if (event.key === 'd'){
        color = 'skyblue'
        pintar('key',color)
    }
    // Si es presionada la tecla 'q'
    else if(event.key === 'q'){
        addElement()
        pintar('new-element','purple')
    }
    // Si es presionada la tecla 'w'
    else if(event.key === 'w'){
        addElement()
        pintar('new-element','gray')
    }
    // Si es presionada la tecla 'e'
    else if(event.key === 'e'){
        addElement()
        pintar('new-element','brown')
    }
    })
/* *********************************************************** */

/* *********************************************************** */
/* ************************* PUNTO 4 ************************* */
/* *********************************************************** */
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
/* *********************************************************** */