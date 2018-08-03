document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const createLiElement(field) {
  //   let liElement = document.createElement("li");
  //   liElement.textContent = ``
  //   return liElement;
  // };

  const form = document.querySelector('#new-animal-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const species = event.target.species.value;
    const bred = event.target.bred.value;
    const continent = event.target.continent.value;

    const newAnimal = document.createElement("ul");

    const newAnimalName = document.createElement("li");
    const newAnimalPhoto = document.createElement("IMG");
    const newAnimalSpecies = document.createElement("li");
    const newAnimalBred = document.createElement("li");
    const newAnimalContinent = document.createElement("li");

    newAnimalName.textContent = `Name: ${name}`;
    newAnimalPhoto.setAttribute("src", `${photo}`);
    newAnimalPhoto.setAttribute("width", "225rem");
    newAnimalPhoto.setAttribute("alt", `Photo: ${species}`);
    newAnimalSpecies.textContent = `Species: ${species}`;
    newAnimalBred.textContent = `Bred: ${bred}`;
    newAnimalContinent.textContent = `Continent: ${continent}`;

    newAnimal.appendChild(newAnimalName);
    newAnimal.appendChild(newAnimalPhoto);
    newAnimal.appendChild(newAnimalSpecies);
    newAnimal.appendChild(newAnimalBred);
    newAnimal.appendChild(newAnimalContinent);

    const animalList = document.querySelector('#animal-list')
    animalList.appendChild(newAnimal);

    form.reset();
  });

  const buttonDelete = document.querySelector('#delete-button');
  buttonDelete.addEventListener('click', () => {
    const animalList = document.querySelector('#animal-list')
    animalList.textContent = '';
    form.reset();
  });

});
