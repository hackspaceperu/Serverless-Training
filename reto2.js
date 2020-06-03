
var max_value=8;
var cant_numeros=2;
function Sumar(datos,i,j){
	// asigno valores por defecto 
	if(i == undefined ){
		i=0;
		j=1;
	}
	if(j == undefined){
		j=i+1;
	}
	// arreglo de pares
	var rpta = [];
	// si esta fuera el los indices retorno arreglo vacio
	if(i>=datos.length || j>=datos.length)
		return rpta;
	// comparo si los valores correspondiente a  los indices suman 8
	if(datos[i]+datos[j] == max_value){
		//inserto los valores en rpta como un arreglo
		rpta.push([datos[i],datos[j]]);
		// elimino los valores segun los indices
		datos.splice(i,1);
		datos.splice(j,1);
		// llamo recursivamente a verificar el resto de elementos
		return rpta.concat(Sumar(datos,0,1));
	}else{
		// si no suma verificare en los indices siguientes
		return 	rpta.
				concat(Sumar(datos,i,j+1)). // avanzo el siguiente elemento en j, (verifica el i actual con el j+1)
				concat(Sumar(datos,i+1,j+1)); // al mismo tiempo avanzo el elemento en i (avanza en i para los sigientes j+1) si no se hace se quedaria revisando solo el i inicial ya no avanzaria
	}
}



var datos = [4, 6, 2, -6, 10,8];
 	var pares = Sumar(datos);
	console.log(pares);
