/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno;
	var	numerodos;
	

	numerouno = document.getElementById('numeroUno').value;
	numerodos = document.getElementById('numeroDos').value;

	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	
	alert(numerouno + numerodos);
	

	








	//alert(parseInt(numerouno) + parseInt(numerodos));  (PUEDE HACERSE ASI)
	//numerouno=parseInt(numerouno); numerodos=parseInt(numerodos); (otra forma de hacer)

}

