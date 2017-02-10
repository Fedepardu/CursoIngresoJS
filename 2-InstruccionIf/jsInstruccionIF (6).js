function Mostrar()
{
//tomo la edad  

	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if (edad >= 18) 
	{

	alert("Mayor de edad");

	} 
	else 
	{
		if(edad>=13 && edad<=17) 
		{
			alert("Adolescente");
		} 

		else 
		{
			alert("NIÑO");
		}

	};


	




	


}//FIN DE LA FUNCIÓN. OJO CON EL IF Y EL ELSE, EL PRIMER ELSE HACE QUE FUNCIONE EL PROGRAMA.