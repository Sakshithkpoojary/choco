// Add an event listener to the navigation menu
document.addEventListener('DOMContentLoaded', () => {
	const navLinks = document.querySelectorAll('nav a');

	navLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			const targetSection = document.querySelector(link.getAttribute('href'));
			targetSection.scrollIntoView({ behavior: 'smooth' });
		});
	});
});