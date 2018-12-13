


class Coche {

    // Metodo constructor

    constructor(marca, modelo, color, potencia, precio){

        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.potencia = potencia
        this.precio = precio
    }

    // Metodos
    
    dimeMarca(){

        return ("Mi coche es un " + this.marca + ' ' + this.modelo)
   }


   IvaVehiculo(){

        const iva = 0.21
        let precioIva = null
        let precioTotal = null

        //Calculamos el iva

        precioIva = this.precio * iva
        precioTotal = precioIva + this.precio

        return precioTotal 

   }

   // Metoso statico

   static volumenCoche(largo, ancho, alto){

        let volumenTotal = (largo *  ancho * alto)
        

        return volumenTotal.toPrecision(5)
   }

}