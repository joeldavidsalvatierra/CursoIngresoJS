function Mostrar()
{
//tomo la edad  
	var laEdad;
	laEdad=document.getElementById('edad').value;
	/*if (laEdad>=13 && laEdad<=19)
	{
	}
	else
	{
		alert("Usted no es Adolescente");
	}*/
	if (laEdad<13 || laEdad>19) 
	// || es el "o"
	{
		alert("Usted no es Adolescente");
	}
	//alert("Su edad es "+laEdad);

}//FIN DE LA FUNCIÓN