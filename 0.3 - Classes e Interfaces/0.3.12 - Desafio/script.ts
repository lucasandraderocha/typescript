// Exercicio
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salva UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

// HTMLElements
const form = document.querySelector<HTMLFormElement>("#form");
const inputName = document.querySelector<HTMLInputElement>("#nome");
const inputEmail = document.querySelector<HTMLInputElement>("#email");
const inputCpf = document.querySelector<HTMLInputElement>("#cpf");

// Interface Global
declare global {
  interface Window {
    // UserData: Partial<UserData>;
    UserData: Partial<UserData>;
  }
}
// Interface local
// UserData Interface
interface UserData {
  name: string;
  email: string;
  cpf: string;
}

window.UserData = {};

function handleInputNameEvent(e: KeyboardEvent) {
  window.UserData.name;
  // console.log(window.UserData.name);
}

inputName?.addEventListener("keyup", handleInputNameEvent);
