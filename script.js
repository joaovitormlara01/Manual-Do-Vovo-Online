
// Quiz questions
const quizzes = {
  1: [
    {
      question: "Qual é a primeira medida de segurança ao usar WhatsApp?",
      options: [
        "Ativar verificação em duas etapas",
        "Compartilhar sua localização",
        "Aceitar todos os convites de grupo",
      ],
      correct: 0
    }
  ],
  2: [
    {
      question: "Como identificar um golpe bancário?",
      options: [
        "O banco pede sua senha por telefone",
        "O banco envia link por SMS",
        "O banco solicita atualização pelo app oficial",
      ],
      correct: 2
    }
  ]
};

function startQuiz(quizNumber) {
  alert(`Quiz ${quizNumber} iniciado!\nEm desenvolvimento...`);
}

// Form handling
document.getElementById('cadastroForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Cadastro recebido! Em breve você receberá nossas dicas de segurança.');
});

// Emergency button
document.getElementById('emergencyButton').addEventListener('click', function() {
  alert('Contatos de Emergência:\n\n' +
        'Polícia: 190\n' +
        'Delegacia Virtual: www.delegaciavirtual.gov.br\n' +
        'Central de Atendimento ao Idoso: 0800-555-0123');
});
