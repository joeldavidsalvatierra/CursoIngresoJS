/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{   var numeroUno;
	var numeroDos;
	var suma;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	suma=parseInt(numeroUno)+parseInt(numeroDos);
	//se puede hacer: suma=parseInt(numeroUno);
	///suma:parseInt(numeroDos)
	alert("la suma es "+suma);
}