//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
	var elCuadro;
	elCuadro=document.getElementById('elNombre').value;
	alert(elCuadro);
}
{	var importe;
	var multi;
	importe=prompt("Ingrese el iporte");
	multi=importe*1.21;
	alert("Precio final "+multi);
}
{
	var largo;
	var ancho;
	var suma;
	var multi;
	largo=document.getElementById('largoTerreno').value;
	ancho=document.getElementById('anchoTerreno').value;
	suma=parseInt(largo)+parseInt(ancho);
	multi=suma*5;
	alert("Necesita "+multi+" metros de almbre.");
}
//recuperatorio
{
	var suNombre;
	suNombre=document.getElementById('elNombre').value;
	alert(suNombre)
}
{
	var importeUno;
	var descuento;
	var resultado;
	importeUno=prompt("Ingrese la suma");
	descuento=importeUno*0.25;
	resultado=importeUno-descuento;
	alert(resultado);
}
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	suma=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres);
	promedio=suma/3;
	alert("Total a pagar: $"+suma+" el promedio de los precios es "+promedio);
}