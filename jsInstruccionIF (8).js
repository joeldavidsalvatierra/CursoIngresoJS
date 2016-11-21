function Mostrar()
{
//tomo la edad  
	var laEdad;
	var estadoCivil;
	estadoCivil=document.getElementById('estadoCivil').value;
	console.log(estadoCivil);
	laEdad=document.getElementById('edad').value;
	/*if (laEdad<18 && != estadoCivil"Soltero")
	 {
	 }
	else
	{
		alert("Es soltero y no es menor");
	}*/
	if (laEdad<18)
	 {

	 }
	 else
	 {
	 	if (estadoCivil != "Soltero")
	 	 {
	 	 
	 	 	alert("Es soltero y no es menor");
	 	 }
	 }


}//FIN DE LA FUNCIÓN