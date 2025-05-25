const projetos = [
  {
    titulo: 'Laurent & Émile – Amor em Maré Trágica',
    descricao: 'Romance LGBT ambientado no século XVIII, que explora o amor proibido e a tragédia da perda precoce. Uma carta final emociona e encerra a narrativa.'
  },
  {
    titulo: 'My Lady – Entre Espelhos e Sussurros',
    descricao: 'Romance gótico e trágico ambientado no século XIX. Duas mulheres lutam contra os segredos do passado e as convenções sociais para viver seu amor proibido.'
  },
  {
    titulo: 'A Filha da Noite',
    descricao: 'História mística sobre destino, autodescoberta e escuridão, com uma atmosfera etérea e personagens profundos.'
  },
  {
    titulo: 'Projeto em Andamento',
    descricao: 'Espaço reservado para um novo projeto em desenvolvimento, que será revelado em breve.'
  }
];

function carregarProjetos() {
  const container = document.getElementById('lista-projetos');

  projetos.forEach(projeto => {
    const projetoDiv = document.createElement('div');
    projetoDiv.classList.add('projeto');

    projetoDiv.innerHTML = `
      <div class="projeto-title">${projeto.titulo}</div>
      <div class="projeto-desc">${projeto.descricao}</div>
    `;

    container.appendChild(projetoDiv);
  });
}

window.onload = carregarProjetos;
