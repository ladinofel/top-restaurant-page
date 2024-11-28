import "./mid-content.css";
import MainLogo from "./images/coffee-brand.png";

const midContentGenerator = () => {
	const midContainer = document.createElement('div');
  midContainer.classList.add('mid-container');
  
  const logo = document.createElement('img');
  logo.src = MainLogo;

  midContainer.append(logo);

  const mainContainer = document.querySelector('.main-container');
  mainContainer.append(midContainer);
}

export {midContentGenerator};