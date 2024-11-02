/* *************************** Dashboard - JavaScript para la web *************************** */
/* ********************************** Desafío 3 - Funciones ********************************* */
/* ******************************* Requerimiento 2.1, 2.2 y 2.3****************************** */
/* ****************************************************************************************** */

// Función que modifica color de fondo de determinado elemento web
function pintar(color = 'green'){
    ele.style.backgroundColor = color
}

//Selección del elemento al cual se le modificará el color de fondo
const ele = document.getElementById("ele1")
//Se ejecuta la función pintar() cuando ocurre el evento click encima del elemento web seleccionado
ele.addEventListener("click", function(){
    pintar('yellow')
});

