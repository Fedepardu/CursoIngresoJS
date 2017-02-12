

function Mostrar()
{

	var diaSemana = document.getElementById('diaSemana').value;

	diaSemana = prompt("Ingrese un dia de la semana", " ");

	switch(diaSemana) 
		{
			case "Sabado":
			case "Domingo":
			alert("Fin de semana!!");
			break;

			default:
			alert("A trabajar!!");

		}







}