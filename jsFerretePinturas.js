/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{	var temperatura;
	var resta
	temperatura=document.getElementById('Temperatura').value;
	resta=temperatura-32;
	alert(temperatura+" Fahrenheit son "+resta+" Centígrados");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var suma;
	temperatura=document.getElementById('Temperatura').value;
	suma=parseInt(temperatura)+parseInt(32);
	alert(temperatura+" Centígrados son "+suma+" Fahrenheit");
}
