
// Adiciona evento de submit ao formulário de registro
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Captura os valores dos campos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validação dos campos
  if (!name || !email || !password || !confirmPassword) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Validação da senha
  if (password.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres!');
    return;
  }

  // Validação da confirmação de senha
  if (password !== confirmPassword) {
    alert('As senhas não coincidem!');
    return;
  }

  // Pegar usuários existentes do localStorage ou criar array vazio
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
  // Adicionar novo usuário ao array
  usuarios.push({
    email: email,
    senha: password
  });
  
  // Salvar array atualizado no localStorage
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
  // Mostrar mensagem de sucesso e redirecionar
  alert('Registro realizado com sucesso!');
  window.location.href = 'index.html';
});