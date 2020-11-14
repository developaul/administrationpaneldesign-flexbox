const menuIzquierdo = document.querySelector( '.menu-izquierdo' );

menuIzquierdo.addEventListener( 'click', event => {
     const claseMenu = event.target.classList;

     // Selecciona el contenedor
     const contenedor = document.querySelector('.pagina'),
     flechaIzq        = document.querySelector('.fa-arrow-left'),
     flechaDer        = document.querySelector('.fa-arrow-right');


     if( claseMenu.contains( 'fa-arrow-left' ) ) {
          // cerrar el menú lateral
          contenedor.classList.add( 'no-menu' );
          event.target.style.display = 'none';
          flechaDer.style.display = 'block';
     } else if( claseMenu.contains( 'fa-arrow-right' ) ) {
          // abre el menú lateral
          contenedor.classList.remove( 'no-menu' );
          event.target.style.display = 'none';
          flechaIzq.style.display = 'block';
     }
});