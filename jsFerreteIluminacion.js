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
 	var cantidadLamparas;
 	var marcas;
 	var descuentoUno;
 	var descuentoDos;
 	var descuentoTres;
 	var descuentoCuatro;
 	var descuentoCinco;
 	var descuentoSeis;
 	var descuentoSiete;
 	//var precioDescuento;
 	var descuentoTodos;
 	cantidadLamparas=document.getElementById('Cantidad').value;
 	marcas=document.getElementById('Marca').value;
 	descuentoTodos=35*cantidadLamparas*0.50;
 	descuentoUno=35*5*0.60;
 	descuentoDos=35*5*0.70;
 	descuentoTres=35*4*0.75;
 	descuentoCuatro=35*4*0.80;
 	descuentoCinco=35*3*0.85;
 	descuentoSeis=35*3*0.90;
 	descuentoSiete=35*3*0.95;
 	console.log(marcas);
 	if (cantidadLamparas>=6)
 	 {
 	 	document.getElementById('precioDescuento').value=descuentoTodos;
 	 }//if (cantidadLamparas>=6)
 	 if (cantidadLamparas==5 && marcas=="ArgentinaLuz") 
 	 {
 	 	document.getElementById('precioDescuento').value=descuentoUno;
 	 }
 	 else
 	 		{
 	 			document.getElementById('precioDescuento').value=descuentoDos;
 	 		}//if (cantidadLamparas==5 && marcas=="ArgentinaLuz")
 	 if (cantidadLamparas==4 && marcas=="ArgentinaLuz"||marcas=="FelipeLamparas")
 	  {
 	  		document.getElementById('precioDescuento').value=descuentoTres;
 	  }
 	  	else
 	  	{
 	  		document.getElementById('precioDescuento').value=descuentoCuatro;
 	  	}//if (cantidadLamparas==4 && marcas=="ArgentinaLuz"||"FelipeLamparas")
 	  if (cantidadLamparas==3 && marcas!="ArgentinaLuz"||marcas!="FelipeLamparas")
 	   {
 	   		document.getElementById('precioDescuento').value=descuentoSiete;
 	   }
 	  		if (cantidadLamparas==3 && marcas=="ArgentinaLuz")
 	   		{
 	   			document.getElementById('precioDescuento').value=descuentoCinco;
 	   		}
 	   			if (cantidadLamparas==3 && marcas=="FelipeLamparas")
 	   			{
 	   				document.getElementById('precioDescuento').value=descuentoSeis;
 	   			}
 	   	

 	
}
