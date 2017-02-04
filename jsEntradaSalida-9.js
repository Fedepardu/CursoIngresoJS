/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var resultado;
	var porcentaje;


	sueldo = document.getElementById('sueldo').value;
	
	sueldo= parseInt(sueldo);
	porcentaje=parseInt(porcentaje);
	porcentaje = prompt("Ingrese el porcentaje","20");

	resultado = sueldo + sueldo * porcentaje/100;
	document.getElementById('resultado').value = resultado;





	/* Lo hice de otra manera aca le agregue otra cosa, le agregue que la persona ponga el porcentaje que quiere agregarle.
	El ejercicio estandar es igual al 10, pero en vez de multiplicar por 0.75 , lo hacemos por 1.10*/



	
}
