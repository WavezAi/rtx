// Add some interactivity to the website

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {

	link.addEventListener('click', (e) => {		e.preventDefault();

		const sectionId = link.getAttribute('href');

		document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });

	});

});
