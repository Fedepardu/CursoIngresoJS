

function Cuadrado()
{

	var parametro;
	var resultado;
	var largo = document.getElementById('Largo').value;
	var ancho = document.getElementById('Ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	parametro = (largo + ancho) * 2;

	resultado = parametro * 3

	alert("La cantidad que necesita es " + resultado);















}