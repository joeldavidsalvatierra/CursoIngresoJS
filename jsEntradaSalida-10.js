/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var resultadoFinal;
	importe=document.getElementById('importe').value;
	/*resultadoUno=importe*0.25;
	resultadoFinal=importe-resultadoUno*/
	resultadoFinal=importe*0.75;
	document.getElementById('resultado').value=resultadoFinal;

	
}
