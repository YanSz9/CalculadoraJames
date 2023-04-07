function preencheVisor(num) {
  const visor = document.querySelector(".visor");
  if (num === "=") {
    const resultado = avaliaExpressao();
    visor.innerHTML = resultado;
    window.operationsArray = [resultado];
    return;
  }
  if (num === "AC") {
    visor.innerHTML = "";
    window.operationsArray = [];
    return;
  }
  const selectedNumber = document.createElement("span");
  selectedNumber.innerHTML = num;
  window.operationsArray.push(num);
  visor.append(selectedNumber);
}

function avaliaExpressao() {
  const expressao = window.operationsArray.join("");
  return eval(expressao);
}

const createButton = (text, onClick) => {
  const div = document.createElement("div");
  div.className = "button";
  div.innerHTML = `
    <span>${text}</span>
  `;
  div.onclick = onClick;
  return div;
};

const createButtons = (reference) => {
  const divCalculadora = document.getElementById(reference);

  const divButtons = document.createElement("div");
  divButtons.className = "buttons";

  divCalculadora.append(divButtons);

  const buttonsArray = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    ".",
    "=",
    "/",
    "AC",
  ];

  let row = document.createElement("div");
  row.className = "row";
  divButtons.appendChild(row);

  buttonsArray.forEach((buttonText) => {
    const button = createButton(buttonText, () => preencheVisor(buttonText));
    if (buttonText === "=") {
      row.appendChild(button);
      return;
    }
    if (row.childNodes.length === 4) {
      row = document.createElement("div");
      row.className = "row";
      divButtons.appendChild(row);
    }
    row.appendChild(button);
  });
};

const createVisor = (reference) => {
  const divCalculadora = document.getElementById(reference);
  let visor = document.createElement("div");
  visor.className = "visor";
  divCalculadora.appendChild(visor);
};

const executar = (reference) => {
  console.log("carregando coisas aqui..... aguarde");
  createVisor(reference);
  createButtons(reference);
  window.operationsArray = [];
};

executar("calculadora");
