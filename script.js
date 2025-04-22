document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); 
  /*Quando o formulário é enviado, esta função é executada, e o comportamento padrão é cancelado*/

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (!email || !password) {
    alert('Por favor, preencha todos os campos!');
    return false;
  }
  
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuarioExiste = usuarios.some(u => u.email === email);
  
  if (!usuarioExiste) {
    alert('Email não cadastrado. Por favor, registre-se primeiro.');
    return false;
  }
  
  if (!verificarUsuario(email, password)) {
    alert('Senha incorreta!');
    return false;
  }
  
  alert('Login realizado com sucesso!');
});

function verificarUsuario(email, senha) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];   /*JSON: um formato de dados leve e fácil de ler que é usado para armazenar e transmitir dados*/

  return usuarios.some(u => u.email === email && u.senha === senha);
}

document.querySelector('a[href="#"]').addEventListener('click', function(e) {
  e.preventDefault();
  const email = document.querySelector('input[type="email"]').value;
  
  if (!email) {
    alert('Por favor, digite seu email para recuperar a senha!');
    return;
  }

  alert('Um email de recuperação foi enviado para: ' + email);
});

