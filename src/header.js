import "./header.css";
import { menuGenerator } from "./menu";

const headerGenerator = () => {
  const header = document.createElement('div');
	header.classList.add('header');

	const home = document.createElement('div');
	home.classList.add('home');
	const homeTitle = document.createElement('a');
	homeTitle.classList.add('header-link');
	homeTitle.textContent = 'Home';
	home.append(homeTitle);

	const menu = document.createElement('div');
	menu.classList.add('menu');
	const menuTitle = document.createElement('a');
	menuTitle.classList.add('header-link');
	menuTitle.textContent = "Menu";
	menu.append(menuTitle);

	menu.addEventListener('click', () => {
		menuGenerator();
	});

	const contact = document.createElement('div');
	contact.classList.add('contact');
	const contactTitle = document.createElement('a');
	contactTitle.classList.add('header-link');
	contactTitle.textContent = "Contact";
	contact.append(contactTitle);

	header.append(home, menu, contact);

	const mainContainer = document.querySelector('.main-container');
	mainContainer.append(header);
};

export {headerGenerator};