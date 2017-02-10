function Mostrar()
{
//tomo la edad  
	
	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if (edad <18) 
	{

		if (edad>12) 
		{

		alert("Adolescente");
		}

	}


}//FIN DE LA FUNCIÓN. Tengo un if dentro de otro if, lo que hago es separar en subconjunto.

//utilizando los dos if, aunque se puede resolver de otra manera. Tambien lo puedo hacer con el && en vez de doble if.