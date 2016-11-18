/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	suma=parseInt(numeroUno)+parseInt(numeroDos);
	//se puede hacer: suma=parseInt(numeroUno);
	///suma:parseInt(numeroDos)
	alert("la suma es "+suma);
}

function restar()
{var numeroUno;
	var numeroDos;
	var resta;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	resta=(numeroUno)-(numeroDos);
	//no hace falta el parseInt en las emas operaciones(resta,divicio y multiplicacion)s
	//solo en el caso de la suma porque el simbolo de + tambien concatena.
	alert("la resta "+resta);
}

function multiplicar()
{   var numeroUno;
	var numeroDos;
	var multiplica;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	multiplica=(numeroUno)*(numeroDos);
	//se puede hacer: suma=parseInt(numeroUno);
	///suma:parseInt(numeroDos)
	alert("la multiplicacion es "+multiplica);
	
}

function dividir()
{   var numeroUno;
	var numeroDos;
	var dividir;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	dividir=(numeroUno)/(numeroDos);
	//se puede hacer: suma=parseInt(numeroUno);
	///suma:parseInt(numeroDos)
	alert("la divicion es "+dividir);
	
}

