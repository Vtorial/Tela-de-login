// Função para recuperação de senha
document.querySelector('a[href="#"]').addEventListener('click', function(e) {
  e.preventDefault();
  const email = document.querySelector('input[type="email"]').value;

  if (!email) {
    alert('Por favor, digite seu email para recuperar a senha!');
    return;
  }

  alert('Um email de recuperação foi enviado para: ' + email);
});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (verificarLogin(email, password)) {
    alert('Login realizado com sucesso!');
    // Aqui você pode redirecionar para a página principal
  }
});

function verificarUsuario(email, senha) {
  // Pegar usuários do localStorage
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  return usuario !== undefined;
}

function verificarLogin(email, senha) {
  if (!email || !senha) {
    alert('Por favor, preencha todos os campos!');
    return false;
  }
  
  if (!verificarUsuario(email, senha)) {
    alert('Você não está cadastrado!');
    window.location.href = 'register.html';
    return false;
  }
  
  return true;
}

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  
  if (!email || !password) {
    alert('Por favor, preencha todos os campos!');
    return;
  }
  
  if (password.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres!');
    return;
  }

  alert('Login realizado com sucesso!');
});
