/* ===== SHOW MENU ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	})
}

/* ===== CLOSE MENU ===== */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	})
}

/* ===== REMOVE MENU MOBILE ===== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
}
navLink.forEach(l => l.addEventListener('click', linkAction));