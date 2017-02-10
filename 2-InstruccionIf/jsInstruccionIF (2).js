function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	edad= parseInt(edad);

	if (edad>17) {

	alert("Mayor de edad");
	};
	
	if (edad<18) {

	alert("Menor de edad");

	};


}//FIN DE LA FUNCIÓN. Con este ejercicio determinamos si es mayor o menor de edad, ponemos dos if en este caso (lo agregue yo)