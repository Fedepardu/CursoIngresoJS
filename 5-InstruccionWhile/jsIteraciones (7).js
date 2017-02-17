function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta == 'si')
	{
		contador++;
		numero = prompt("Ingrese numero")
		numero = parseInt(numero);
		respuesta = prompt("Ingrese 'si' para continuar ingresando numeros");
		acumulador = acumulador + numero

	}

	promedio = acumulador / numero;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN