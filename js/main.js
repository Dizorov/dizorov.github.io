console.log('JS is work');


var	navBar     = document.querySelector('.page-header__navbar'),
	menuButton = document.querySelector('.navbar__menu-icon'),
	menuIcon   = document.querySelector('.menu-icon__bar-line'),
	navBarNav  = document.querySelector('.navbar__nav');

//Переключение меню в мобильной версии

function menuToggler() {
	if ( menuIcon.classList.contains('menu-icon__bar-line--active') ) {
		navBar.classList.remove('page-header__navbar--active');
		navBarNav.classList.remove('navbar__nav--active');
		menuIcon.classList.remove('menu-icon__bar-line--active');
	}

	else {
		navBar.classList.add('page-header__navbar--active');
		navBarNav.classList.add('navbar__nav--active');
		menuIcon.classList.add('menu-icon__bar-line--active');
	}
}

menuButton.addEventListener('click', menuToggler);