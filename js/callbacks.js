
//Uso de calbacks en Javascript

    // la funcion setTimeOut() funciona con un callback
    // Tiene la siguiente estructura:

    /***
     *  setTimeOut(callback, tiempo de espera) 
     * 
     * 
     */
    
    var saludo = function(){

        alert("Hola desde callabcks")
    }

    setTimeout(saludo, 2000)