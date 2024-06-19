/* Vybereme prvek s id menu-tlacitko
const menuTlacitko = document.querySelector('#menu-tlacitko');

// Přidáme posluchač události kliknutí
menuTlacitko.addEventListener('click', () => {
    // Vybereme prvek s id menu-polozky
    const menuPolozky = document.querySelector('#menu-polozky');
    
    // Přidáme třídu show, pokud ji prvek ještě nemá
    if (!menuPolozky.classList.contains('show')) {
        menuPolozky.classList.add('show');
    } else {
        // Odebereme třídu show, pokud ji prvek již má
        menuPolozky.classList.remove('show');
    }
});*/

const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');

menuTlacitko.addEventListener('click', () => {
    // Přepínání třídy show
    menuPolozky.classList.toggle('show');
    
    // Změna ikony podle stavu menu
    if (menuPolozky.classList.contains('show')) {
        // Menu je rozbalené - změníme ikonu na křížek
        menuTlacitko.innerHTML = '<i class="fas fa-xmark"></i>';
    } else {
        // Menu je sbalené - změníme ikonu na hamburger
        menuTlacitko.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

