function Mostrar()
{
//tomo la edad  
 var laEdad;
	laEdad=document.getElementById('edad').value;
	/*if (laEdad>=13) 
	{
	if (laEdad<=17) 
	{
		alert("Es adolescente");
	}*/
	//se puede hacer de las dos formas, la de arriva o la de abajo
	if (laEdad>=13 && laEdad<=17)
	{
		alert("Es adolescente");
	} 
	alert("Su edad es: "+laEdad);
	//el ultimo alert sale siempre
	


}//FIN DE LA FUNCIÓN