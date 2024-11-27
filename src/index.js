import { headerGenerator } from "./header";
import { midContentGenerator } from "./mid-content";
import { footerGenerator } from "./footer";
import "./styles.css";

const mainContainerGenerator = () => {
	const mainContainer = document.createElement('div');
	mainContainer.classList.add('main-container');
	document.body.append(mainContainer);
};

mainContainerGenerator();
headerGenerator();
midContentGenerator();
footerGenerator();



console.log("TEST");