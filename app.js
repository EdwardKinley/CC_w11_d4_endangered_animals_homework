document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-animal-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const species = event.target.species.value;
    const continent = event.target.continent.value;

    const newAnimal = document.createElement("ul");
    const newAnimalName = document.createElement("li");
    const newAnimalSpecies = document.createElement("li");
    const newAnimalContinent = document.createElement("li");

    newAnimalName.textContent = `Name: ${name}`;
    newAnimalSpecies.textContent = `Species: ${species}`;
    newAnimalContinent.textContent = `Continent: ${continent}`;

    newAnimal.appendChild(newAnimalName);
    newAnimal.appendChild(newAnimalSpecies);
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
