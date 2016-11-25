/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	contadorIntentos=0;
	numeroSecreto=Math.floor((Math.random()*100)+10); 
	

}

function verificar()
{
	var numeroIngresado
	numeroIngresado=document.getElementById('numero').value;
	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;
	if (numeroIngresado==numeroSecreto)
	 {
	 	alert("Gano");
	 		if (contadorIntentos>10)
	 		 {
	 		 	alert("afortunado en el amor");
	 		 }
	 		 if (contadorIntentos>5 && contadorIntentos<11)
	 		  {
	 		  	alert("falta técnica");
	 		  }
	 		 if (contadorIntentos==5)
	 		  {
	 		  	alert("usted esta en la media");
	 		  }
	 		  if (contadorIntentos==4)
	 		   {
	 		   	alert("Exelente técnica");
	 		   }
	 		   if (contadorIntentos==3)
	 		    {
	 		     alert("Exelente es suerte");  
	 		    }
	 		    if (contadorIntentos==2)
	 		     {
	 		     	alert("exelente persepcion");
	 		     }
	 		     if (contadorIntentos==1)
	 		      {
	 		      	alert("usted es un Psíquico");
	 		      }
	 }
	 else
	 {
	 	if (numeroSecreto>numeroIngresado)
	 	 {
	 	 	alert("Falta");
	 	 }
	 	 	else
	 	 	{
	 	 		alert("Te pasaste");
	 	 	}
	 }
	

}