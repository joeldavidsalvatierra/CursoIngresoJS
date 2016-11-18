/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	//var radioTerreno;
	var suma;
	var milti;
	var multiDos
	largoTerreno=document.getElementById('Largo').value;
	anchoTerreno=document.getElementById('Ancho').value;
	//radioTerreno=document.getElementById('Radio').value;
	suma=parseInt(largoTerreno)+parseInt(anchoTerreno);
	multi=suma*2;
	multiDos=multi*3;
	alert("Usted nesecita "+multiDos+" metros de alambre");
}
function Circulo () 
{	var radioTerreno;
	var multi
	radioTerreno=document.getElementById('Radio').value;
	multi=2*3.1416*radioTerreno*3;
	//multiDos=multi*3
	alert("Usted nesecita "+multi+" metros de alambre");
	
}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var multi;
	var multiDos;
	var multiTres;
	largoTerreno=document.getElementById('Largo').value;
	anchoTerreno=document.getElementById('Ancho').value;
	multi=largoTerreno*anchoTerreno;
	multiDos=multi*2;
	multiTres=multi*3;
	alert("Se necesitan "+multiDos+" bolsas de cemento y "+multiTres+" bolsas de cal");

}