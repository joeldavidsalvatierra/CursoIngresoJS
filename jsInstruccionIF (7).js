function Mostrar()
{
//tomo la edad  

	var estadoCivil
	var laEdad
	estadoCivil=document.getElementById('estadoCivil').value;
	laEdad=document.getElementById('edad').value;
	console.log(estadoCivil);
	if (estadoCivil=="Soltero")
	{

	}	
		else
		if (laEdad<18)
		 {
		 	alert("Usted es demaciado pequeño para no ser soltero");
		 }
	
		
		
		/*if(estadoCivil!="Soltero" && <18){
			alert("Usted es demaciado pequeño para no ser soltero");
			esta es otra forma de hacerlo el simbolo != sicnifica distinto.
		}*/




}//FIN DE LA FUNCIÓN