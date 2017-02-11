function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
		alert("Este mes no tiene mas de 29 dias")
		break;

		default:
		alert("Este mes no tiene 30 o mas dias")
		break;


	}
	
	


}//FIN DE LA FUNCIÓN. Esta es la mejor forma de hacerlo, como en el ejercicio 2 en vez de poner uno por uno,
	// pongo directamente "default" y no incluyo lo que puse en el/los case anteriores.