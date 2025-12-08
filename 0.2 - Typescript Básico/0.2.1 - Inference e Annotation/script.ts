let nintendo = "Nintendo";
let modeloNintendo: string = "Switch 2";
let lancamento: number = 2025;
let disponivel: boolean = true;
nintendo = "gamecube"

const carro: {
  marca: string;
  id: number;
  portas: number;
  modelo: string;
}={
  marca: "Ferrari",
  id: 2131,
  portas: 2,
  modelo: "F-279D9"
}

// console.log({nintendo,modeloNintendo,lancamento,disponivel})


function somar (fNum: number, sNum: number) {
  return fNum + sNum;
}

// console.log(somar(4,4))

function saudacoes(nome: string, idade: number) {
  return `Olá, ${nome}. Sua idade atual é: ${idade}`;
}

// console.log(saudacoes("Lucas", 28))


function carroModelo(carro: {marca: string; modelo: string; placa: string; portas: number; motor: number}) {
  return carro
}
const chevro = {
  marca: "Chevrolet", modelo: "Onix", placa: "213X4EF", portas: 4, motor: 2.0
}
// console.log(carroModelo(chevro))


function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

// console.log(normalizarTexto("OLÁ!"))

const input = document.querySelector("input")
const total = (arg: number) => arg + 100 - arg * 0.2 

const loadedItem = localStorage.getItem("total")
if(input && loadedItem) {
  input.value = loadedItem;
  totalGanho(Number(input.value));
}

function totalGanho(value: number) {
  const p = document.querySelector("p")
  if(p){
    p.innerText = `Total Ganho: ${total(value)}`;
  }
  
}

const totalMudou = () => {
  localStorage.setItem("total", String(input?.value))
  totalGanho(Number(input?.value))
}


input?.addEventListener("keyup", totalMudou)

