/* *************************** Dashboard - JavaScript para la web *************************** */
/* ********************************** Desafío 3 - Funciones ********************************* */
/* ************************* Requerimiento 3, los 2 primeros puntos ************************* */
/* ****************************************************************************************** */

function pintar(idElement, color = 'green'){
    const bkgColor = document.getElementById(idElement)
    bkgColor.style.backgroundColor = color
}

const blueDiv = document.getElementById('blue-div')
const redDiv = document.getElementById('red-div')
const greenDiv = document.getElementById('green-div')
const yellowDiv = document.getElementById('yellow-div')

blueDiv.addEventListener("click", function(){
    pintar('blue-div', 'black')
})
redDiv.addEventListener("click", function(){
    pintar('red-div', 'black')
})
greenDiv.addEventListener("click", function(){
    pintar('green-div', 'black')
})
yellowDiv.addEventListener("click", function(){
    pintar('yellow-div', 'black')
 })
