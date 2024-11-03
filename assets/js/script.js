/* *************************** Dashboard - JavaScript para la web *************************** */
/* ********************************** Desafío 3 - Funciones ********************************* */
/* ******************************* Requerimiento 2.1, 2.2 y 2.3****************************** */
/* ****************************************************************************************** */



// Función que modifica color de fondo de un elemento web dado
// Se define un valor por defecto al parámetro color, en este caso 'green'
function pintar(elementId, color = 'green'){
    // Selección de elemento que se recibe por parámetro
    const element = document.querySelector('#' + elementId)
    element.style.backgroundColor = color
}

// Selección del elemento al cual se le modificará el color de fondo
const ele = document.getElementById('ele1')
// Se ejecuta la función pintar() cuando ocurre el evento click encima del elemento web seleccionado
ele.addEventListener("click", function(){
    pintar('ele1', 'yellow')
})

