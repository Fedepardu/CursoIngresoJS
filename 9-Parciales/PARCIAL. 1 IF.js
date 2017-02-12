
function Mostrar()
{

	var numerouno = document.getElementById('numeroUno').value;
	var numerodos = document.getElementById('numeroDos').value;
	var resultado;

	numerouno = parseInt(numerouno)
	numerodos = parseInt(numerodos)

	numerouno = prompt("Ingrese primer numero", " ");
	numerodos = prompt("Ingrese segundo numero"," ");

	if (numerouno == numerodos) 
		{
			resultado = numerouno * numerodos
		} else
			{
				if (numerouno > numerodos) 
					{
						resultado = numerouno - numerodos
					} else
						{
							resultado = numerouno + numerodos
						}
			}

		document.write(resultado);






}