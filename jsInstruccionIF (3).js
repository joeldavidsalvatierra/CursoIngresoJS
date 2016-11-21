function Mostrar()
{
//tomo la edad  
	var laEdad;
	laEdad=document.getElementById('edad').value;
	if (laEdad>18) 
{
	alert("Es mayor de Edad");
}
	else
{
	alert("Es menor de Edad");
}
	alert("Su edad es "+laEdad);

}//FIN DE LA FUNCIÓN