import GitLogo from "./images/githubIcon.svg";
import './footer.css';

const footerGenerator = () => {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footer-container');

  const handleContainer = document.createElement('div');
  handleContainer.classList.add('handle-container');
  const logo = document.createElement('img');
  logo.classList.add('git-logo');
  logo.src = GitLogo;
  const handle = document.createElement('a');
  handle.id = 'handle';
  handle.textContent = 'Ladinofel';
  handle.setAttribute('href', 'https://github.com/ladinofel/top-restaurant-page');
  handle.setAttribute('target', '_blank');
  handleContainer.append(logo, handle);
  footerContainer.append(handleContainer);

  const mainContainer = document.querySelector('.main-container');
  mainContainer.append(footerContainer);
};

export {footerGenerator};