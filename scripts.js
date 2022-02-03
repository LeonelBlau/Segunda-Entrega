
class Moneda{
    constructor(nombre, valor1, valor2) {
        this.nombre = nombre;
        this.valor1   = valor1;
    }
}

                           
const moneda1 = new Moneda("Dolares", 0.0047);                          
const moneda2 = new Moneda("Pesos Uruguayos", 0.42);                     
const moneda3 = new Moneda("Pesos Chilenos", 7.71);                     
const moneda4 = new Moneda("Euros", 0.0042);                     
const moneda5 = new Moneda("Libras", 0.0070);                     
const moneda6 = new Moneda("Yenes", 1.09);                     
const moneda7 = new Moneda("Pesos Mexicanos", 0.20);                     
                 


// array con objetos
const Monedas = [moneda1, moneda2, moneda3];
console.log(Monedas)



let cantidad = document.querySelector(".ingresoMonto");
let convertir = document.querySelector(".convertir");

const cambio = document.querySelector(".aCambiar");



cambio.addEventListener('change', ()=> {

    if (cambio.options[cambio.selectedIndex].text == moneda1.nombre) {
        convertir.addEventListener('click', ()=> {
            document.querySelector(".resultado").innerHTML = `Usted recibira por sus ${cantidad.value} Pesos Argentinos la suma de ${cantidad.value * moneda1.valor1} ${moneda1.nombre}`
        })   
    } else if  (cambio.options[cambio.selectedIndex].text == moneda2.nombre) {
        convertir.addEventListener('click', ()=> {
            document.querySelector(".resultado").innerHTML = `Usted recibira por sus ${cantidad.value} Pesos Argentinos la suma de ${cantidad.value * moneda2.valor1} ${moneda2.nombre}`
        }) 
    } else if  (cambio.options[cambio.selectedIndex].text == moneda3.nombre) {
        convertir.addEventListener('click', ()=> {
            document.querySelector(".resultado").innerHTML = `Usted recibira por sus ${cantidad.value} Pesos Argentinos la suma de ${cantidad.value * moneda3.valor1} ${moneda3.nombre}`
        })
    } else if  (cambio.options[cambio.selectedIndex].text == moneda4.nombre) {
        convertir.addEventListener('click', ()=> {
            document.querySelector(".resultado").innerHTML = `Usted recibira por sus ${cantidad.value} Pesos Argentinos la suma de ${cantidad.value * moneda4.valor1} ${moneda4.nombre}`
        })
    } else if  (cambio.options[cambio.selectedIndex].text == moneda5.nombre) {
        convertir.addEventListener('click', ()=> {
            document.querySelector(".resultado").innerHTML = `Usted recibira por sus ${cantidad.value} Pesos Argentinos la suma de ${cantidad.value * moneda5.valor1} ${moneda5.nombre}`
        })
    } else if  (cambio.options[cambio.selectedIndex].text == moneda6.nombre) {
        convertir.addEventListener('click', ()=> {
            document.querySelector(".resultado").innerHTML = `Usted recibira por sus ${cantidad.value} Pesos Argentinos la suma de ${cantidad.value * moneda6.valor1} ${moneda6.nombre}`
        })
    } else if  (cambio.options[cambio.selectedIndex].text == moneda7.nombre) {
        convertir.addEventListener('click', ()=> {
            document.querySelector(".resultado").innerHTML = `Usted recibira por sus ${cantidad.value} Pesos Argentinos la suma de ${cantidad.value * moneda7.valor1} ${moneda7.nombre}`
        })
    }

})


