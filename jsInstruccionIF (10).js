function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random=Math.floor((Math.random()*10)+1);
	console.log(random);
	if (random>=9)
	 {
	 	alert("EXELENTE");
	 }//if (random>9)
	 else
	 {
	 	if (random>=4)
	 	 {
	 	 	alert("APROBÓ");
	 	 }//if (random>4)
	 
	 else
	 {
	 	alert("Vamos, la proxima se puede");
	 }
	}

}//FIN DE LA FUNCIÓN