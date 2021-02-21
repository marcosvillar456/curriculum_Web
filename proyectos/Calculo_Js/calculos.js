function esPar(n){
	if (n % 2 == 0) {
		console.log("true");
	}else{
		console.log("false");
	}
}

esPar(40);

document.write("en el de esPar puse el 40<br>");

function esMultiploDe5(n){
	if (n % 5 == 0) {
		console.log("true");
	}else{
		console.log("false");
	}
}
document.write("<br>");
esMultiploDe5(12);
document.write("en el de multiplo de 5 puse 12<br>");



function esNumeroMultiploDe(numero,divisor) {
	if (numero % divisor == 0){
		console.log("true");
	}else{
		console.log("false");
	}
}
document.write("<br>");
esNumeroMultiploDe(25,5);
document.write("en el de esNumeroMultiploDe use el 25 y dividido por 5<br> ");


function invertirPalabra(palabra) {
	return palabra.split("").reverse().join("");
}
 document.write("<br>");
console.log(invertirPalabra("Hola Mundo"));
document.write("hola mundo=");document.write(invertirPalabra("Hola Mundo"));



function primeraLetraMayuscula(palabra) {

 mayuscula = palabra.charAt(0).toUpperCase();
 seguido = palabra.substr(1,(palabra.length)-1);

	console.log(mayuscula+seguido);
}
primeraLetraMayuscula("hola profe,¿todo bien?");


function convertirEnTitulo(oracion) {
 mayuscula = oracion.toUpperCase();
 	console.log(mayuscula);
}
convertirEnTitulo("hola a todo el mundo");

	
function alternarMayusculas(palabra)
{
  cadena="";
  
 for(i=0;i<palabra.length;i)
   {
     cadena=cadena+palabra.charAt(i).toUpperCase();
     i++;
     cadena=cadena+palabra.charAt(i).toLowerCase();
     i--;
     i=i+2;
}
     console.log(cadena);
}

alternarMayusculas("mi nombre es marcos");


function contarVocales(palabra) {
var	vocales= "aeiouAEIOU";
var contador=0;
for(var i = 0 ; i < palabra.length; i++){
	if(vocales.indexOf(palabra[i]) !== -1){
		contador += 1;
	}
}
return contador;
}
 document.write("<br>");

document.write("<br>murcielago tiene=");document.write(contarVocales("murcielago"));document.write("  vocales");
console.log(contarVocales("murcielago"));


function invertirLista(listaDeNumeros) {
 var reverse=0;
 	while(listaDeNumeros > 0){
 	  reverse = reverse * 10;
 	  reverse = reverse + (listaDeNumeros % 10);
 	  listaDeNumeros=parseInt(listaDeNumeros / 10);
		
	 }
 	console.log(reverse);
 }

invertirLista(123456);


function crearListaDeNumeros(inicio, fin) {
	if (inicio < fin) {
		while(inicio <= fin){
			document.write(inicio);
			inicio++;
					}
	}else{
		while(inicio >= fin){

			document.write(inicio);
			inicio--;
	 	}	
	}
}
document.write("<br>");
document.write("<br>");
crearListaDeNumeros(6,0);

/*function calcularPromedio(listaDeNumeros) {
 for(var contador = 0; contador <=2; contador++){
 	const count = listaDeNumeros.push(4	);
	console.log(count);
 }



}


console.log(calcularPromedio(1,2,3));*/


function ordenarDeMayorAMenor(listaDeNumeros)
{
  console.log(listaDeNumeros.sort((a,b) => b - a));
}

ordenarDeMayorAMenor([4,5,6,7]);


function numeroMayor(listaDeNumeros) {
   return Math.max.apply(null, listaDeNumeros);
}
document.write("<br>");
document.write("<br>");
document.write(numeroMayor([10,111,2,3]));

function ordenarPalabrasPorLongitud(listaDePalabras)
{
  console.log(listaDePalabras.sort((a,b)=>a.length-b.length));
}
ordenarPalabrasPorLongitud(["a","leon","yo soy batman","ab","dou"])

function palabraMasCorta(listaDePalabras) {
 listaDePalabras.sort((a,b)=>a.length-b.length);
 console.log(listaDePalabras[0]);

}
palabraMasCorta(["leon","yo soy batman","ab","dou"])

function soloPositivos(listaDeNumeros)
{
  for(i=0;i<listaDeNumeros.length;i++)
    {
      if(listaDeNumeros[i]>=0)
        {

          console.log("los numeros positivos son="+listaDeNumeros[i]);

        }
    }

}

soloPositivos([3,0,8,-6,-1,-9]);

function filtrarVerdaderescos(lista) {
    for(i=0;i<lista.length;i++)
    {
    	 if(lista[i] !== null && lista[i] !== "" && lista[i] &&  lista[i] !== 0)
        {
		document.write("<br>");
          document.write("los numeros verdaderos son son : "+lista[i]);
          
        }
    }
}
document.write("<br>");
filtrarVerdaderescos([1,2,-1,0,"hola","",null]);

function contarAprobados(listaDeNotas) {
      for(i=0;i<listaDeNotas.length;i++)
    {
    	 if(listaDeNotas[i] >= 7)/* para contar los desaprobados hay que poner < 7*/
        {
		document.write("<br>");  
         document.write("los aprobados son="+listaDeNotas[i]);
          
        }
    }
}
document.write("<br>");
contarAprobados([1,5,7,8,9,2]);

function filtrarRepetidos(listaDeNumeros) {
	
let unicos = new Set(listaDeNumeros);

console.log([...unicos]);
}
document.write("<br>");
filtrarRepetidos([1,1,2,3,2]);

function contarApariciones(listaDeNumeros) {

var numeros_repetidos = {};
/*forEach =ejecuta la funcion la cantidad de veces del array osea la cantidad de numeros que haya en lista de numeros*/
listaDeNumeros.forEach(function(repetidos){
  numeros_repetidos[repetidos] = (numeros_repetidos[repetidos] || 0) + 1;

});

console.log(numeros_repetidos);
}
contarApariciones([1,1,2,3,2]);


function elMasRepetido(listaDeNumeros) {

}

function separarParesDeImpares(listaDeNumeros) {
	var pares = listaDeNumeros.filter(function(listaDeNumeros){
		return listaDeNumeros % 2 == 0;
	});
	console.log("los pares son: " + pares);
	
		var impares = listaDeNumeros.filter(function(listaDeNumeros){
		return listaDeNumeros % 2 ==1;
	});
			console.log("los impares son: " + impares);
}

separarParesDeImpares([1,2,3,4,5]);		

function separarPalabras(oracion) {
	cuenta = 0;
	posicion = oracion.indexOf(" ");
		while ( posicion != -1 ) {
   		cuenta++;
 		  posicion = posicion.indexOf(posicion+1);
		console.log(posicion);
		}
			console.log(posicion);

	}
separarPalabras(["hola marcos"]);

function horaActual() {
	var d = new Date();
 		document.write("hora: "+d.getHours());
 		document.write(":"+d.getMinutes());
    	document.write(":"+d.getSeconds());
		if (d.getHours() > 12) {
   			 document.write(" PM");
    		}
    	else{
    	document.write(" Am");
    	
   		 }
	}
horaActual();

function diaDeLaSemana() {
	var d = new Date();
	 var dia =new Array(7);
	  dia[0] = "domingo";
	  dia[1] = "lunes";
	  dia[2] = "martes";
	  dia[3] = "miercoles";
	  dia[5] = "jueves";
	  dia[6] = "viernes";
	  dia[7] = "sabado";

  document.write("<br>");
  document.write(dia[d.getDay()]);
}
diaDeLaSemana();

function fechaActual() {
  var d = new Date();
  var mes =d.getMonth() + 1;
    document.write("<br>");
    document.write(d.getDate());
     document.write("/");
    document.write(mes);
    document.write("/");
    document.write(d. getFullYear());
   
}
fechaActual();

function convertirDeCelciusAFarenheit(c) {
  var formula = (c * (9/5)) + 32;

	document.write("<br>");
  document.write(formula);
}
convertirDeCelciusAFarenheit(10);

function convertirDeMetrosAYardas(m) {
   var formula = m * 1.0936;

   document.write("<br>");
   document.write(formula);

}
convertirDeMetrosAYardas(20);

function convertirColor(r, g, b) {
	 var hexadecimal = r.toString(16);
	 var hexadecimal2 = g.toString(16);
	 var hexadecimal3 = b.toString(16);

 	document.write("<br>");
  document.write("#");   
  document.write(hexadecimal.toUpperCase());  
  document.write(hexadecimal2.toUpperCase());
  document.write(hexadecimal3.toUpperCase());
}
convertirColor(255, 255, 255);

function crearPersona(nombre, apellido, edad, documento) {
var usuario= nombre;

 usuario = new Object();

usuario["nombre usuario"]  = nombre           
usuario["apellido"] 	   = apellido;
usuario["documento"]       = documento;
usuario["edad"]            = edad;


console.log(usuario);

}
crearPersona("Juan",20,123456, "Pérez", 20, 123456);



function ordenarPorApellido(listaDePersonas) {
var usuario = [listaDePersonas];
var array =listaDePersonas.sort(function(a, b){return a.toLowerCase().localeCompare(b.toLowerCase());}); 
	 usuario = new Object();
	 usuario["nombre usuario"]  = array;
	console.log(listaDePersonas);

    }

ordenarPorApellido(["villar","rochetaaa"]);



function sonLaMismaPersona(persona1 ,persona2) {
  var usuario1= persona1 ;
  var usuario2= persona2 ;
if (usuario1 == usuario2) {
	console.log("son la misma persona")
	}
	else{

 usuario1 = new Object();

usuario1["nombre usuario"]  = persona1 ;         
usuario1["apellido"] 	    ="villar";
usuario1["documento"]       ="222222" 	
console.log(usuario1);

 usuario2 = new Object();

usuario2["nombre usuario"]  = persona2;           
usuario2["apellido"] 	    ="rocheta";
usuario2["documento"]       ="222222" 	

console.log(usuario2);
}

}
sonLaMismaPersona("marcos" , "marcos");

function eliminarPersonasDuplicadas(listaDePersonas) {
	/*
 var personas_repetidos = {listaDePersonas};
var mapa = listaDePersonas.map[personas_repetidos](function(listaDePersonas) {
	 return Math.sqrt(mapa);
	  delete mapa; 
});*/
}







eliminarPersonasDuplicadas("marcos" , "marcos");