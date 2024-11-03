/* *************************** Dashboard - JavaScript para la web *************************** */
/* ********************************** Desafío 3 - Funciones ********************************* */
/* ******************************* Requerimiento 2.1, 2.2 y 2.3****************************** */
/* ****************************************************************************************** */



// Función que modifica color de fondo de un elemento web dado
// Se define un valor por defecto al parámetro color, en este caso 'green'
function pintar(elementId, color = 'green'){
    // Selección del elemento web que se recibe por parámetro
    const element = document.querySelector('#' + elementId)
    // Modifica el color de fondo del elemento web seleccionado
    element.style.backgroundColor = color
}

// Selección del elemento web que se utiliza en el evento de escucha
const ele = document.getElementById('ele1')
// Se ejecuta la función pintar() cuando ocurre el evento click encima del elemento web seleccionado
ele.addEventListener("click", function(){
    pintar('ele1', 'yellow')
})

