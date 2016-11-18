/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{   var miVariable;
	miVariable=document.getElementById('elNombre').value;
	var miVariable2;
	miVariable2=document.getElementById('laEdad').value;
	alert("Usted se llama "+miVariable+" y tiene "+miVariable2+" años");

	//var uanVariable="datos";
	//console.log("primer mensaje");
	//console.info("mensaje",uanVariable);
	//var laEdad;
	//var miNombre;
	//miNombre=document.getElementById('elNombre').value;
	//console.info("linea final",uanVariable);
	//laEdad=document.getElementById('laEdad').value;
	//alert("Usted se llama "+miNombre+" y tiene "+laEdad+" años");

}

