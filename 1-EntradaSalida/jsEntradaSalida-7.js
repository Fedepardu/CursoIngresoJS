/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;


	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);


	resultado = numeroUno+numeroDos;

	alert("La suma es " + resultado);





}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado


	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;


	resultado = numeroUno-numeroDos;

	alert("La resta es " + resultado);



}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;


	resultado= numeroUno+numeroDos;	
	alert("La multiplicacion es " + numeroUno * numeroDos);


}

function dividir()
{
	var numeroUno;
	var numeroDos
	var resultado


	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;


	resultado = numeroUno+numeroDos;
	alert("La division es " + numeroUno / numeroDos);

}

