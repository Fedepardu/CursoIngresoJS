/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var radio;
	var resultado;

	

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	radio = document.getElementById('Radio').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);
	radio = parseInt(radio);

	resultado = (largo+ancho) * 3;
	

	alert("La cantidad es " + resultado);







}
function Circulo () 
{
	var radio;
	var area;
	var resultado;

	radio = document.getElementById('Radio').value;

	radio = parseInt(radio);
	area = parseInt(area);

	area = radio * 2 * 3.14;

	resultado = area * 3;

	alert(resultado);



}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;
	var resultado;


	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;


	largo = parseInt(largo);
	ancho = parseInt(ancho);

	area = largo*ancho

	cemento = area*2
	cal = area*3

	resultado = cemento + cal;
	


	alert("Bolsas de son " + cemento + " De cal son " + cal);

	





}