const menuTlacitkoElm = document.querySelector('#menu-tlacitko');
const menuPolozkyElm = document.querySelector('#menu-polozky');
const fasElm = document.querySelector('.fas');

const toggleMenu = () => {
	if (menuPolozkyElm.classList.contains('show')) {
		menuPolozkyElm.classList.remove('show');
		fasElm.classList.remove('fa-xmark');
		fasElm.classList.add('fa-bars');
	} else {
		menuPolozkyElm.classList.add('show');
		fasElm.classList.add('fa-xmark');
		fasElm.classList.remove('fa-bars');
	}	
}

menuTlacitkoElm.addEventListener('click', toggleMenu);
