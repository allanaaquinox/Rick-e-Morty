async function gerPersonagem() {
  var allCharacters = [];

  async function fetchCharacters(page) {
    var url = 'https://rickandmortyapi.com/api/character?page=' + page;

    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();

      allCharacters = allCharacters.concat(dados.results);

      if (dados.info.next) {
        await fetchCharacters(page + 1);
      } else {
        mostrarPerson(allCharacters);
      }
    } catch (error) {
      console.log('Erro:', error);
    }
  }

  await fetchCharacters(1);
}

function mostrarPerson(characters) {
  var listaPersonagem = document.getElementById('lista-personagem');

  var container = document.createElement('div');
  container.classList.add('container-person');

  characters.forEach((character, index) => {
    var cardPersonagem = document.createElement('div');
    cardPersonagem.classList.add('personagem-card');

    cardPersonagem.addEventListener('click', () => {
      navegarPara(character);
    });

    var personImagem = document.createElement('img');
    personImagem.classList.add('imagem-personagem');
    personImagem.src = character.image;

    var detalhesPerson = document.createElement('div');
    detalhesPerson.classList.add('personagem-detalhe');

    var nomePerson = document.createElement('div');
    nomePerson.classList.add('nome-personagem');
    nomePerson.textContent = character.name;

    var statusPerson = document.createElement('div');
    statusPerson.classList.add('personagem-status');
    statusPerson.textContent = 'Status: ' + character.status;

    detalhesPerson.appendChild(nomePerson);
    detalhesPerson.appendChild(statusPerson);

    cardPersonagem.appendChild(personImagem);
    cardPersonagem.appendChild(detalhesPerson);

    container.appendChild(cardPersonagem);

    if ((index + 1) % 4 === 0 || index === characters.length - 1) {
      listaPersonagem.appendChild(container);

      container = document.createElement('div');
      container.classList.add('container-person');
    }
  });
}

function navegarPara(character) {
  var personId = character.id;
  var nomePerson = encodeURIComponent(character.name);
  var statusPerson = encodeURIComponent(character.status);
  var especiePerson = encodeURIComponent(character.species);
  var origemPerson = encodeURIComponent(character.origin.name);

  window.location.href = 'character-page.html?id=' + personId +
    '&name=' + nomePerson +
    '&status=' + statusPerson +
    '&species=' + especiePerson +
    '&origin=' + origemPerson;
}

gerPersonagem();