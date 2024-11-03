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
/* *********************************************************** */

/* *********************************************************** */
/* ************************* PUNTO 4 ************************* */
/* *********************************************************** */
// variable que guardará el id del elemento creado
let newElementId
// Función para agregar un elemento web dado
// Por defecto, se define un valor al parámetro webelement, en este caso un elemento web div que es lo solicitado en el punto 4
function addElement(elementId, webelement = 'div'){

    // Obtenemos el elemento contenedor por su ID, dentro del cual se desea crear o guardar un elemento web dado
    const container = document.querySelector('#' + elementId)
    
    // Creamos un elemento web, en este caso un div
    const newElement = document.createElement(webelement)

    // Dimensiones del div teniendo en cuenta lo solicitado
    newElement.style.width = '200px'
    newElement.style.height = '200px'

    // Al nuevo elemento se le asigna un ID
     newElement.id = idGenerator()
     newElementId = newElement.id
    //  console.log(newElementId)

    // Asignamos un texto al nuevo elemento
    newElement.textContent = 'Elemento agregado ' + idnumber

    // Agregamos el nuevo elemento al contenedor
    container.appendChild(newElement)

    
}
// se inicializa variable
let idnumber = 0
// Función generar ID para los elementos web
let idGenerator = function(){
    // Incrementa el valor en 1 
    idnumber += 1
    // Retorna el ID del nuevo elemento
    return 'new-element-' + idnumber
}
/* *********************************************************** */

/* *************************************** PUNTO 3 y 4 ****************************************/
// Evento para escuchar las teclas que se presionan y se ejecutará la función en correspondencia con la tecla que se presiona de acuerdo a los solicitado en los puntos 3 y 4 respectivamente
/* PUNTO 3: */
// 'a': color rosado
// 's': color naranjo
// 'd': color celeste
/* PUNTO 4: */
// 'q': se crea un div nuevo de color morado con las mismas dimensiones que el div del punto 3
// 'w': se crea un div nuevo de color gris con las mismas dimensiones que el div del punto 3
// 'e': se crea un div nuevo de color café con las mismas dimensiones que el div del punto 3
document.addEventListener('keydown', function (event) {
    /* ************ PUNTO 1 ************ */
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

    /* ************ PUNTO 4 ************ */
    // Si es presionada la tecla 'q'
    else if(event.key === 'q'){
        addElement('container')
        pintar(newElementId,'purple')
    }
    // Si es presionada la tecla 'w'
    else if(event.key === 'w'){
        addElement('container')
        pintar(newElementId,'gray')
    }
    // Si es presionada la tecla 'e'
    else if(event.key === 'e'){
        addElement('container')
        pintar(newElementId,'brown')
    }
    })
/* *********************************************************** */