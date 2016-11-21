function Mostrar()
{
//tomo la edad  
	var laEdad;
	laEdad=document.getElementById('edad').value;
	/*if (laEdad>=13 && laEdad<=17)
	 {
	 	alert("Es adolescente");
	 }
	 if (laEdad>17) 
	 {
	 	alert("Es mayor de edad");
	 }
	 if (laEdad<13)
	  {
	  	alert("Es un niño");
	  }*/
	  //se puede hacer de las dos formas pero la mas facil es la ultima
	  //se complica menos ay que pensar.
	if (laEdad<13)
{	
	alert("Es un niño");
}
else
{
	if(laEdad>17)
	{
	alert("Es mayor");
	}
	else
	{
	alert("Es adolescente");
	}
}
//else me muestra todo lo que no esta en el parametro eje if(laEdad<13)
//muestra todos los mayores de 13.

}//FIN DE LA FUNCIÓN