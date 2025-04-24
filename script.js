
// Card interaction
function showInfo(cardType) {
  const detailsId = `${cardType}-details`;
  const details = document.getElementById(detailsId);
  const allDetails = document.querySelectorAll('.card-details');
  
  allDetails.forEach(detail => {
    if (detail.id !== detailsId) {
      detail.classList.remove('active');
    }
  });
  
  details.classList.toggle('active');
}

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
function savePassword() {
  const siteName = document.getElementById('siteName').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (!siteName || !username || !password) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  const passwords = JSON.parse(localStorage.getItem('passwords') || '[]');
  passwords.push({ siteName, username, password });
  localStorage.setItem('passwords', JSON.stringify(passwords));
  
  updatePasswordList();
  clearForm();
}

function updatePasswordList() {
  const passwords = JSON.parse(localStorage.getItem('passwords') || '[]');
  const passwordList = document.getElementById('passwordList');
  if (!passwordList) return;
  
  passwordList.innerHTML = passwords.map(p => `
    <div class="password-item">
      <h3>${p.siteName}</h3>
      <p>Usuário: ${p.username}</p>
      <p>Senha: ${'*'.repeat(p.password.length)}</p>
    </div>
  `).join('');
}

function clearForm() {
  document.getElementById('siteName').value = '';
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}

function call(number) {
  window.location.href = `tel:${number}`;
}

if (document.getElementById('passwordList')) {
  updatePasswordList();
}

// Emergency button
document.getElementById('emergencyButton').addEventListener('click', function() {
  alert('Contatos de Emergência:\n\n' +
        'Polícia: 190\n' +
        'Delegacia Virtual: www.delegaciavirtual.gov.br\n' +
        'Central de Atendimento ao Idoso: 0800-555-0123');
});
