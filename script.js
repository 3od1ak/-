'use strict';

let detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
	// 1. extract the value from each form field
	// 2. clear out the form fields
	// 3. run a function that creates the new card
	// 4. if needed, change the header at the top of the destination list
	// 5. add the card

	event.preventDefault();

	let destName = event.target.elements['name'].value;
	let destLocation = event.target.elements['location'].value;
	let destPhoto = event.target.elements['photo'].value;
	let destDescription = event.target.elements['description'].value;

	for (let i = 0; i < detailsForm.length; i++) {
		detailsForm.elements[i].value = '';
	}

	let destCard = createDistanationCard(destName, destLocation, destPhoto, destDescription);

	let wishListContainer = document.getElementById('title');

	if (wishListContainer.children.length === 0) {
		document.getElementById('title').innerHTML = 'My Wish List';
	}

	document.querySelector('.destinations_container').appendChild(destCard);
}

function createDistanationCard(name, location, photoURL, description) {
	let card = document.createElement('div');
	card.className = 'card';

	let img = document.createElement('img');
	img.setAttribute('alt', name);

	let constantPhotoUrl = 'img/city.jpg';

	if (photoURL.length === 0) {
		img.src = constantPhotoUrl;
	} else {
		img.setAttribute('src', photoURL);
	}

	card.appendChild(img);

	let cardBody = document.createElement('h3');
	cardBody.className = 'card-body';

	let cardTitle = document.createElement('h3');
	cardTitle.innerText = name;
	cardBody.appendChild(cardTitle);

	let cardSubtitle = document.createElement('h4')
	cardSubtitle.innerText = location;
	cardBody.appendChild(cardSubtitle);

	if (description.length !== 0) {
		let cardText = document.createElement('p');
		cardText.className = 'card-text';
		cardText.innerText = description;
		cardBody.appendChild(cardText);
	}

	let cardDeleteBtn = document.createElement('button');
	cardDeleteBtn .innerText = 'Remove';

	cardDeleteBtn.addEventListener('click', removeDestination);
	cardBody.appendChild(cardDeleteBtn);

	card.appendChild(cardBody);

	return card;
}

function removeDestination(event) {
	let card = event.target.parentElement.parentElement;
	card.remove();
}