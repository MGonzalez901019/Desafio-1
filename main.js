let nombreIngresado = "";

do {
    //ingreso de variables
   
    nombreIngresado = prompt("ingrese nombre");
    let apellidoIngresado = prompt("ingrese apellido");
    
    //si el usuario ya no ingresa nombre pero sí apellido no se toma en cuenta para la impresion por consola
    if (nombreIngresado!= "")
    {
    console.log(nombreIngresado +" "+ apellidoIngresado);
    }

} while (nombreIngresado != "");

//let nombreIngresado = prompt("ingrese nombre");