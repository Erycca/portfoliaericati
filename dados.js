// Dados da tua Revista Digital no rodapé
const meusProjetos = [
  {
    titulo: "Bancos de Dados Relacionais com Amazon RDS",
    categoria: "Cloud & Dados",
    descricao: "Exercício prático focado na configuração, operação e dimensionamento de um banco de dados relacional na nuvem AWS, garantindo alta disponibilidade.",
    linkLinkedIn: "https://www.linkedin.com/posts/ericabarbosaanalista_cloud-activity-7238719055090614273-0ozE?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHg-Z0B9HLqfjajJdn4yB9DosK2byo2Snw", 
    tecnologias: ["AWS RDS", "SQL", "Cloud Computing"]
  },
  {
    titulo: "Agenda Virtual Intelligent",
    categoria: "Python",
    descricao: "Projeto académico, aplicação interativa desenvolvida em Python para o gerenciamento simplificado de contatos.",
    linkLinkedIn: "https://github.com/Erycca/agenda_",
    tecnologias: ["Python"]
  },
  {
    titulo:" Dashboard de Análise de Salários na Área de Dados",
    categoria: "Python, Pandas, Matplotlib",
    descricao: "Projeto dashboard interativo desenvolvido em Python com Streamlit, que permite explorar dados salariais da área de dados de forma dinâmica e visual.",
    linkLinkedIn: "https://github.com/Erycca/imersao-dados-python",
    tecnologias: ["Python", "Pandas", "Matplotlib", "Seaborn", "Análise de Dados", "Visualização de Dados"]
  }
];

// Função para injetar os cards automaticamente no HTML
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("portifoliocompleto");
  
  if (container) {
    meusProjetos.forEach(projeto => {
      const card = document.createElement("div");
      card.className = "card-revista";
      
      card.innerHTML = `
        <span class="categoria">${projeto.categoria}</span>
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <div class="tags">
          ${projeto.tecnologias.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <a href="${projeto.linkLinkedIn}" target="_blank" class="btn-link">Ler Artigo Completo</a>
      `;
      
      container.appendChild(card);
    });
  }
});