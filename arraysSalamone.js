window.onload = nuevoProducto


// ARRAY DE PRODUCTOS PLANTAS SUCULENTAS

let productosSuculentas = [
    { especie: "haworthia", tipo: "fasciata", precio: 200, },
    { especie: "graptopetalum", tipo: "paraguayense", precio: 150 },
    { especie: "echeveria", tipo: "lola", precio: 250 },
    { especie: "gasteria", tipo: "", precio: 250 },
    { especie: "sedum", tipo: "burrito", precio: 250 },

]

// FX PARA CARGAR NUEVOS PRODUCTOS AL ARRAY 
function nuevoProducto() {
    
    let e = ""
    let t = ""
    let p = ""

    do {
        e = prompt("Ingrese el nombre de la especie")
        t = prompt("Ingrese el nombre del tipo de suculenta")
        p = prompt("Ingrese el precio")
        productosSuculentas.push({ especie: e, tipo: t, precio: parseInt(p) })
    }

    while (confirm("¿Va a cargar un productos?")) // CONFIRMAR SI QUEIRE O NO CARGAR MAS PARODUCTOS 

    console.log(JSON.stringify(productosSuculentas)) // PARA QUE QUEDE VISIBLE EL ARRAY COMPLETO EN EL CONSOLE.LOG

    return (productosSuculentas)  // POR SI HICIERA FALTA UTILIZARLO PARA ALGUNA OTRA FX 

}   