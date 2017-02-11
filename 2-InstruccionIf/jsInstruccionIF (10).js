function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var notarandom;

	notarandom = Math.floor((Math.random() * 10) + 1);

	alert(notarandom);

	if (notarandom== 9 || notarandom==10) 
		{
			alert("EXCELENTE");

		} else 
			{
			if (notarandom > 4) 
				{
					alert("Aprobaste");

				} else 
				{
					alert("la proxima se puede");
				}
		}

	


}
