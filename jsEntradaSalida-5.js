/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre
	nombre="Joel";
	var edad
	edad="25";
	var miTexto
	miTexto=prompt("por favor ingrese su nombre ");
	document.getElementById('elNombre').value=miTexto;
	var miEdad
	miEdad=prompt("por favor ingrese su edad");
	document.getElementById('miEdad');
	alert("Usted se llama "+nombre+" y tiene: "+edad);
}

