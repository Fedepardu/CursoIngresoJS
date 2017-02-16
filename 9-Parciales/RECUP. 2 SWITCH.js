
function Mostrar()
{

	var mesdelaño = document.getElementById('Mesdelaño').value;

	mesdelaño = prompt("Ingrese un mes del año"," ");

	switch(mesdelaño) 
		{
			case "Diciembre":
			alert("Se vienen las fiestas");
			break

			case "Enero":
			alert("Comienza el año");
			break

			default:
			alert("No es enero, ni diciembre");
			break
		
		}















}