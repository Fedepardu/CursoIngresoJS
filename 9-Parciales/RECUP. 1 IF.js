

function Mostrar()
{

	var numerouno;
	var numerodos;
	var resultado;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	numerouno = prompt("Ingrese primer numero"," ");
	numerodos = prompt("Ingrese segundo numero"," ");

	resultado = numerouno + numerodos;

	if (resultado > 0) 
		{
			document.write("Resultado positivo");
		} else
			{
				if (resultado == 0) 
				{
					document.write("Resultado cero");
				} else
					{
						document.write("Resultado negativo");
					}
			}














}