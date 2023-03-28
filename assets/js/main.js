const precio = 129.990
message = 'El precio es: ' + precio
document.querySelector('#precio').innerHTML = message

const onCompra = (frmCompra) => {
    let cantidad = frmCompra.cantidad.value
    let color = frmCompra.color.value
    let total = cantidad * precio
    
    if(cantidad=='' || color==''){
        alert('Debe ingresar una cantidad y un color')
        return false
    }
    if(color=='rojo'){
        message='Rojo '
        document.querySelector('#colores').innerHTML = message
        document.querySelector('#colores').style.backgroundColor = 'red'
    }
    if(color=='verde'){
        message='Verde'
        document.querySelector('#colores').innerHTML = message
        document.querySelector('#colores').style.backgroundColor = 'green'
    }
    if(color=='azul'){
        message='Azul '
        document.querySelector('#colores').innerHTML = message
        document.querySelector('#colores').style.backgroundColor = 'blue'
    }

    message1=`Total= $${total}`
    message2= `Cantidad= ${cantidad}`
    
   
    document.querySelector('#totalrespuesta').innerHTML = message1
    document.querySelector('#cantidadrespuesta').innerHTML = message2
    
    return false
} 

