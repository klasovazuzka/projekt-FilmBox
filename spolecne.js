/* Najde prvek s id 'menu-tlacitko'
var menuTlacitko = document.querySelector('#menu-tlacitko');

// Nyní můžeme s tímto prvkem dále pracovat
if (menuTlacitko) {
    // Příklad: Přidání event listeneru
    menuTlacitko.addEventListener('click', function() {
        console.log('Menu tlačítko bylo kliknuto');
    });
}

// Najde prvek s id 'menu-tlacitko'
var menuTlacitko = document.querySelector('#menu-tlacitko');

// Přidání posluchače události kliknutí
if (menuTlacitko) {
    menuTlacitko.addEventListener('click', function() {
        console.log('Menu tlačítko bylo kliknuto');
        // Další akce, které chcete provést při kliknutí na tlačítko
        // Například změna třídy, otevření menu apod.
    });
}

// Najde prvek s id 'menu-tlacitko'
var menuTlacitko = document.querySelector('#menu-tlacitko');

// Najde prvek s id 'menu-polozky'
var menuPolozky = document.querySelector('#menu-polozky');

// Přidání posluchače události kliknutí
if (menuTlacitko && menuPolozky) {
    menuTlacitko.addEventListener('click', function() {
        console.log('Menu tlačítko bylo kliknuto');
        // Přidání třídy 'show' prvku 'menu-polozky'
        menuPolozky.classList.add('show');
    });
}

// Najde prvek s id 'menu-tlacitko'
var menuTlacitko = document.querySelector('#menu-tlacitko');

// Najde prvek s id 'menu-polozky'
var menuPolozky = document.querySelector('#menu-polozky');

// Přidání posluchače události kliknutí
if (menuTlacitko && menuPolozky) {
    menuTlacitko.addEventListener('click', function() {
        console.log('Menu tlačítko bylo kliknuto');
        // Přidání nebo odebrání třídy 'show' prvku 'menu-polozky'
        if (menuPolozky.classList.contains('show')) {
            menuPolozky.classList.remove('show');
        } else {
            menuPolozky.classList.add('show');
        }
    });
}*/

// Najde prvek s id 'menu-tlacitko'
var menuTlacitko = document.querySelector('#menu-tlacitko');

// Najde prvek s id 'menu-polozky'
var menuPolozky = document.querySelector('#menu-polozky');

// Přidání posluchače události kliknutí
if (menuTlacitko && menuPolozky) {
    menuTlacitko.addEventListener('click', function() {
        console.log('Menu tlačítko bylo kliknuto');
        
        // Přidání nebo odebrání třídy 'show' prvku 'menu-polozky'
        if (menuPolozky.classList.contains('show')) {
            menuPolozky.classList.remove('show');
            // Změna ikonky na hamburger
            menuTlacitko.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            menuPolozky.classList.add('show');
            // Změna ikonky na křížek
            menuTlacitko.innerHTML = '<i class="fas fa-xmark"></i>';
        }
    });
}