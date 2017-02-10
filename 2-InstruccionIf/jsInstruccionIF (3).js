function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	edad= parseInt(edad);

	if (edad>17) {

	alert("Mayor de edad");
	} else {
		alert("Menor de edad");
	}



}//FIN DE LA FUNCIÓN. El else es para la otra parte del condicional. el "sino"