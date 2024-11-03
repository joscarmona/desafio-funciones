/* *************************** Dashboard - JavaScript para la web *************************** */
/* ********************************** Desafío 3 - Funciones ********************************* */
/* *************************** Requerimiento 3, punto 1 y punto 2 *************************** */
/* ****************************************************************************************** */

// Función que permite modificar el color de fondo de un elemento web dado
function pintar(elementId, color = 'green'){
    // Selección del elemento web que se recibe por parámetro
    const element = document.querySelector('#' + elementId)
    // Modifica el color de fondo del elemento web seleccionado 
    element.style.backgroundColor = color
}

// Selección de los elementos web que se utiliza en el evento de escucha
const blueDiv = document.getElementById('blue-div')
const redDiv = document.getElementById('red-div')
const greenDiv = document.getElementById('green-div')
const yellowDiv = document.getElementById('yellow-div')

// Se ejecuta la función pintar(elementId, color = 'green') en correspondencia al elemento web que se le haga click
// Div azul
blueDiv.addEventListener("click", function(){
    pintar('blue-div', 'black')
})
// Div rojo
redDiv.addEventListener("click", function(){
    pintar('red-div', 'black')
})
// Div green
greenDiv.addEventListener("click", function(){
    pintar('green-div', 'black')
})
// Div yellow
yellowDiv.addEventListener("click", function(){
    pintar('yellow-div', 'black')
 })
/* *********************************************************************************** */