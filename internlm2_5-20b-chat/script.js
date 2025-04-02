// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Form validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	if (!validateForm()) return;

	form.submit();
});

function validateForm() {
	let isValid = true;
	const nameValue = nameInput.value.trim();
	const emailValue = emailInput.value.trim();
	const messageValue = messageInput.value.trim();

	if (!nameValue) {
		nameInput.classList.add('invalid');
		isValid = false;
	} else {
		nameInput.classList.remove('invalid');
	}

	if (!emailValue) {
		emailInput.classList.add('invalid');
		isValid = false;
	} else {
		emailInput.classList.remove('invalid');
	}

	if (!messageValue) {
		messageInput.classList.add('invalid');
		isValid = false;
	} else {
		messageInput.classList.remove('invalid');
	}

	return isValid;
}
