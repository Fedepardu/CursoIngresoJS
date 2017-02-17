function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "f" && sexo != "m")
{
	sexo = prompt("Reingrese sexo");

}

alert("El sexo es " + sexo)


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN