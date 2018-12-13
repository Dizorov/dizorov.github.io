console.log('JS is work');


var	navBar     = document.querySelector('.page-header__navbar'),
	menuButton = document.querySelector('.navbar__menu-icon'),
	menuIcon   = document.querySelector('.menu-icon__bar-line');

//Активация меню в мобильной версии

function menuToggler() {
	if ( menuIcon.classList.contains('menu-icon__bar-line--active') )
		menuIcon.classList.remove('menu-icon__bar-line--active');
}

menuButton.addEventListener('click', menuToggler);
