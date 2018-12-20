
// Built-in functions

// prompt

    /*const x  = prompt("Ingresa un numero");

    const y = prompt("Ingresa otra numero");

    function suma(x, y, callback){

        callback( x*y)
    }

    suma(x, y, function(resultado){

       console.log(resultado)
    })

    console.log(suma);*/

// funcion eval

    // La funcion "eval" tranforma un string en una varibale.

    eval('a = 1')

    console.log(a)


// Funciones de tiempo

 // setInterval (callback, int numero de veces)

 var x = 0;

var cuenta  = () => {

    console.log(x)
    x++
}

//setInterval(cuenta, 2000);


// setTimeOut(callback, 1200)

    var nombre = 'Luis'

    setTimeout( (nombre)=>{

        alert(`Hola ${nombre}`)

    }, 2000)