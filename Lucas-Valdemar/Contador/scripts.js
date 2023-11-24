const buttons = document.querySelectorAll(".buttons");
const contador = document.querySelector("#contador");
var numero = 0;

class actions {
  attContador() {
    contador.innerText = numero;
  }
  calculate(op) {
    let calculation;
    switch (op) {
      case "button1":
        calculation = numero + 1;
        break;
      case "button2":
        calculation = numero - 1;
        break;
      case "button3":
        calculation = 0;
        break;
      default:
        return;
    }
    numero = calculation;
  }
}

const acts = new actions();
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const op = e.target.id;
    acts.calculate(op);
    acts.attContador();
    console.log(op);
  });
});
