    function getURLParameters() {
      var parametros = {};
      var partes = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        parametros[key] = decodeURIComponent(value);
      });
      return parametros;
    }

    function displaydetalhesPerson() {
      var detalhesPerson = document.getElementById('personagem-detalhe');
      var parametros = getURLParameters();

      if (parametros.name && parametros.status && parametros.species && parametros.origin) {
        var personId = parametros.id;
        var nomePerson = decodeURIComponent(parametros.name);
        var statusPerson = decodeURIComponent(parametros.status);
        var especiePerson = decodeURIComponent(parametros.species);
        var origemPerson = decodeURIComponent(parametros.origin);

        var container = document.createElement('div');
        container.classList.add('container');

        var botaoPrincipal = document.createElement('button');
        botaoPrincipal.textContent = 'Voltar' 
        botaoPrincipal.classList.add('botao');
        botaoPrincipal.addEventListener('click', function() {
        window.location.href = 'index.html';
        });

        container.appendChild(botaoPrincipal);

        var cardDetalhes = document.createElement('div');
        cardDetalhes.classList.add('detalhe-card');

        

        var titulo = document.createElement('div');
        titulo.id = 'titulo';
        titulo.textContent = nomePerson;
        cardDetalhes.appendChild(titulo);
        titulo.classList.add('titulo2');

        var personagemInfo = document.createElement('div');
        personagemInfo.classList.add('inforPersonagem');

        var personImagem = document.createElement('img');
        personImagem.classList.add('imagem-personagem');
        personImagem.src = 'https://rickandmortyapi.com/api/character/avatar/' + personId + '.jpeg';

        var personagemStatus1 = document.createElement('div');
        personagemStatus1.textContent = 'Status: ' + statusPerson;

        var personagemEspecie1 = document.createElement('div');
        personagemEspecie1.textContent = 'Espécie: ' + especiePerson;

        var personagemOrigem1 = document.createElement('div');
        personagemOrigem1.textContent = 'Origem: ' + origemPerson;

      
        personagemInfo.appendChild(personImagem);
        personagemInfo.appendChild(personagemStatus1);
        personagemInfo.appendChild(personagemEspecie1);
        personagemInfo.appendChild(personagemOrigem1);

        cardDetalhes.appendChild(personagemInfo);
    container.appendChild(cardDetalhes);

    detalhesPerson.appendChild(container);



        
      } else {

        detalhesPerson.textContent = 'Erro: Personagem não encontrado.';
      }
    }

    displaydetalhesPerson();