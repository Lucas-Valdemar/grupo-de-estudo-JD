const entrar = document.querySelector("#entrar");

entrar.addEventListener("click", function handleSubmit(e) {
  e.preventDefault();
  const login = document.querySelector("#login").value;
  const senha = document.querySelector("#senha").value;
  console.log("Usuário: " + login);
  console.log("senha: " + senha);
});
