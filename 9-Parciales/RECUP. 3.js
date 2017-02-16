

function Suma()
{
	var	preciouno = document.getElementById('precioUno').value;
	var preciodos = document.getElementById('precioDos').value;
	var preciotres = document.getElementById('precioTres').value;
	var resultado;

	preciouno = parseInt(preciouno);
	preciodos = parseInt(preciodos);
	preciotres = parseInt(preciotres);

	resultado = preciouno + preciodos + preciotres

	alert("El precio es " + resultado);

}	function Promedio()
{

	var	preciouno = document.getElementById('precioUno').value;
	var preciodos = document.getElementById('precioDos').value;
	var preciotres = document.getElementById('precioTres').value;
	var promedio;

	preciouno = parseInt(preciouno);
	preciodos = parseInt(preciodos);
	preciotres = parseInt(preciotres);

	promedio = (preciouno + preciodos + preciotres) / 3;

	alert("El promedio es " + promedio);













}