const submit = document.querySelector("#buttonInput");
const popUp = document.querySelector(".popUp");

submit.addEventListener("click", function handleSubmit(e) {
  e.preventDefault();
  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const numero = document.querySelector("#numero").value;
  const senha = document.querySelector("#senha").value;
  console.log(
    "nome: " + nome,
    "email: " + email,
    "numero: " + numero,
    "senha: " + senha
  );
  popUp.style.display = "flex";
});
