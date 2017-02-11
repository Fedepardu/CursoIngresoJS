/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
 	var cantidad;
 	var precio;
 	var precioFinal;
 	var precioDescuento;
 	var Marca;

 	cantidad = document.getElementById('Cantidad').value;
 	Marca = document.getElementById('Marca').value;
 	precio = 35;
 	precioFinal = cantidad * precio;
 	precio = parseInt(precio);
 	cantidad = parseInt(cantidad);
 	precioFinal = parseInt(precioFinal);


 	if (cantidad >5)
 	{
 		precioDescuento = precioFinal * 0.50
 	} else
 	{
 		if (cantidad == 5) 
 			{
 				if (Marca == "ArgentinaLuz") 
 				{
 					precioDescuento = precioFinal * 0.60;
 				} else
 				{
 					if (Marca != "ArgentinaLuz") 
 						{
 							precioDescuento = precioFinal * 0.70;
 							
 						} else
 						{
 							if (cantidad == 4)
 							 {
 							 	 	precioDescuento = precioFinal * 0.75;

 							 	 } else 
 							 	 {
 							 	 	if (Marca == "“FelipeLamparas”") 
 							 	 		{
 							 	 			precioDescuento = precioFinal * 0.75;

 							 	 		} else
 							 	 			{
 							 	 				precioDescuento = precioFinal * 0.80;
 							 	 			}
 							 	 }

 							 };
 						}
 				}
 			}
 	

 		
 		
 		 	

 	

 		document.getElementById('precioDescuento').value = precioDescuento;

}
	

		/*if (cantidad == 4) 
	
		if (Marca == "ArgentinaLuz") 
		{	
			precioDescuento = precioFinal * 0.75;
		}
			if (Marca = "“FelipeLamparas”") 
				{
					precioDescuento = precioFinal * 0.75;

				} else
					{
						precioDescuento = precioFinal * 0.80;
					}

					HASTA ACA LLEGUE SIN PODER RESOLVERLO.
					*/


