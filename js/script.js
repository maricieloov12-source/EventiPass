let cantidadtickets = 0; 


const botonesComprar = document.querySelectorAll('.comprar-btn');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
        
        cantidadtickets++;

    
        alert('Ticket comprado con exito.');

        
        let consultartickets = confirm('¿Deseas consultar cuántos tickets tienes registrados?');

        if (consultartickets) {
           
            alert(' Actualmente tienes ' + cantidadtickets+ ' tickets en tu cuenta.');
        }
    });
});
