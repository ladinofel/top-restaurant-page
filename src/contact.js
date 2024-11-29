import './contact.css';
const contactGenerator = () => {
  const midContainer = document.querySelector('.mid-container');
  midContainer.textContent = '';

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const contactInfo = document.createElement('p');
  contactInfo.classList.add('contact-info');
  contactInfo.textContent = 'Contact Information:';

  const address = document.createElement('p');
  address.classList.add('contact-info');
  address.textContent = 'Address: 413 Boulevard Road - Kensington';

  const phoneNumber = document.createElement('p');
  phoneNumber.classList.add('contact-info');
  phoneNumber.textContent = 'Phone Number: 614 345 678 45';

  const reservations = document.createElement('p');
  reservations.classList.add('contact-info');
  reservations.textContent = 'For reservations shoot us an email at expresso@aol.uk';

  contactContainer.append(contactInfo, address, phoneNumber, reservations);
  midContainer.append(contactContainer);
};

export {contactGenerator};