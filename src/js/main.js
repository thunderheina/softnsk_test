/* ===== показать меню в хэдере ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	})
}

/* ===== закрыть меню ===== */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	})
}

/* ===== убрать меню при клике на ссылку ===== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
}
navLink.forEach(l => l.addEventListener('click', linkAction));

/* ===== меню выбора системы(выпадающий список) ===== */

const dropsownWrapper = document.querySelector('.form__dropdown-wrapper');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownIcon = document.querySelector('.dropdown__icon');

dropdownIcon.addEventListener('click', () => {
	dropsownWrapper.classList.toggle('form__dropdown-wrapper--active');
	dropdownList.classList.toggle('dropdown__list--active');
	dropdownIcon.classList.toggle('dropdown__icon--active');
})


/* ===== убрать выпадающий список кликом по экрану ===== */
document.addEventListener('click', function (e) {
	if (e.target !== dropdownIcon) {
		dropsownWrapper.classList.remove('form__dropdown-wrapper--active');
		dropdownList.classList.remove('dropdown__list--active');
		dropdownIcon.classList.remove('dropdown__icon--active');
	}
});

/* ===== вывод значения input range ===== */
const inputRange = document.querySelector('.range__slider');

inputRange.addEventListener('change', (e) => {
	const rangeResult = document.querySelector('.range__result');
	rangeResult.textContent = e.target.value;
})

/* ===== анимация при скролле ===== */
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.order__icon`, { interval: 250, delay: 400, afterReveal: addOutlineAnimation })
sr.reveal(`.order__form`)

function addOutlineAnimation(el) {
	el.classList.add('animation-outline');
}