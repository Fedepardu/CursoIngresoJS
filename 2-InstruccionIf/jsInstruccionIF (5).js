function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if (edad>=18 || edad<=12)

	{	

	alert("No es adolescente");

	};

}//FIN DE LA FUNCIÓN. Ese || se hace con ALT+1 y es el una "O" otra