// CIFRAS ///
function likes(numero) {
    if (numero < 1000) {
      return numero.string();
    } else if (numero >= 1000 && numero < 1000000) {
      return (numero / 1000).toFixed(1) + 'K';
    } else {
      return (numero / 1000000).toFixed(1) + 'M';
    }
  }
  console.log(likes(18990));
  
  // funcion declarativa

  function contravalida(input) {
    return input == "2f"  || input == "4d" 
  }
  console.log(contravalida("2f"));

  //funcion anonima
  let contravalida2 = function (input){
    return input=="2f" || input== "3f"
}
console.log(contravalida2("2f"));


//FUNCION FLECHA arrow function 

let contra=(input)=>{
    return input =="2f" 
}
console.log("contra",contra("2f"))


//segunda funcion de flecha

let validarmujer=(mujer)=>{
    const mujeres =  ["danna", "darly", "salome"]        
    return mujeres.find(muj => muj == mujer);
}
console.log(validarmujer("danna"));

// SPLIT

let splitFun = (nombres)=>{
    const nombre = nombres.split("-")[0];
    const apellidos = nombres.split("-")[1];
    const edad = nombres.split("-")[2];
    console.log(
        `mi nombre es: ${nombre} ${apellidos} y tengo ${edad}`
    )
}
splitFun("jhon-pico-23")
///////////////////////////////////////////////////////////////EJERCICIOS/////////////////////////////////////////////////////////////

//1. Contraseña válida//
//Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.//

let contraseñavalida = (string)=>{
  if (string == "2Fj(jjbFsuj" ||  string == "JeoZiugBf&g9")
  return contraseñavalida =  true
  else 
  return contraseñavalida = false
}
console.log(contraseñavalida("2Fj(jjbFsuj"))


//2. Calcular impuestos//
//Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.//

let calcularimpuesto = (edad,ingresos)=>{
  if (edad >= 18 )
  if (ingresos >= 1000)
  return ingresos-(ingresos/100*40)
  else (edad >= 18 || ingresos <= 1000)
  return ingresos
}
console.log(calcularimpuesto(edad= 18, ingresos=1000));

//3. IMC (ïndice de masa corporal)//
//El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

//El BMI se calcula con la siguiente formula: peso / altura^2//

//Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades//
let  BMI = (peso,altura) => {
  let bmi1 = (peso/altura**2)
  if (bmi1 < 18.5)
  return 'Bajo de peso';
  else if (bmi1 > 18.5 && bmi1 < 24.9 ) 
  return 'Normal'
  else if (bmi1 > 24.9 && bmi1 < 29.9)      
  return 'Sobrepeso'
  else if (bmi1 > 30 )            
  return 'Obeso' 
}

console.log(`el imc del usuario es :${BMI(56,1.7)}`);


//4. Imprimir un arreglo//
//Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte://

function imprimirArreglo(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}
let myArray = ["1","hola","mundo"];
imprimirArreglo(myArray);

//5. Número de Likes//
function likes(numero) {
  if (numero < 1000) {
    return numero.string();
  } else if (numero >= 1000 && numero < 1000000) {
    return (numero / 1000).toFixed(1) + 'K';
  } else {
    return (numero / 1000000).toFixed(1) + 'M';
  }
}
console.log(likes(18990));

//6. FizzBuzz//
//Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

//"fizz" si el número es múltiplo de 3.//
//"buzz" si el número es múltiplo de 5.//
//"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.//
//Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.//
function flizzbuzz(n){
if (n % 3 == 0 && n % 5 == 0) {
return "FizzBuzz";
}else if (n % 3 == 0) {
return "Fizz";
}else if (n % 5 == 0) {
return "Buzz";
}else{
return n;
}
};
console.log (flizzbuzz(8));

//7. Contar rango de números
//Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos)://

//Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.//

let contarrango = (principal, final) => 	{
  return ((final-principal)-1)
}
console.log (contarrango(5,6)) ;

//Sumar rango de números
//Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

//Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
let sumarrango = (principal, final) => 	{
  let suma=0;
  for (i=principal; i<=final; i++){
    suma += i;
    }
return suma;
}
console.log (sumarrango(5,5)) ;

//9. Número de aes (letra "a")
//Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

let numeroDeAes  = (string) => {
   let numerodea = 0;
   for (let i = 0; i < string.length; i++) { 
    if (string[i] === 'a') {numerodea++;}
   }
   return numerodea;
}

console.log(numeroDeAes("Hola a todos")); 

//10. Número de caracteres
//Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

let numeroDeCaracteres = (string,caracter) =>  {
  let contador = 0;
  for (let i = 0; i <= string.length - caracter.length; i++) {
     if (string.substring(i, i + caracter.length) == caracter) {contador++;} 
  }
  return contador;
}

console.log(numeroDeCaracteres("Hola a todos", "a")) 

// 11. Sumar arreglo
//Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

let sumararreglo = (numero) => {
  let contador = 0;
  for (let i = 0;  i<numero.length; i++ ){
    contador+=numero[i];
 }
  return contador;
  }
  console.log(sumararreglo([2,4,6,8]));



// 12 MULTIPLICACION ////////////////////////////////////////////////////////////////
  let multiplicararreglo = (numero) => {
    let contador = 1;
    for (let i = 0;  i<numero.length; i++ ){
      contador *= numero[i];
   }
    return contador;
    }
    console.log(multiplicararreglo([2,4]));
 //  30. Número de asteriscos en una matriz
// Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:

let  numerodeasteriscos = (matriz) =>{
  let filas = matriz.length;
  let columnas = matriz [0].length;
  let contador = 0 ;
  for (let i = 0; i <filas ; i++){
    for (let j = 0;j<columnas;j++){
       if (matriz [i][j]==="*"){
         contador ++;
       }
     }
   }
   return contador;
}

console.log(numerodeasteriscos([["*"," "], [" ","*"]]));

