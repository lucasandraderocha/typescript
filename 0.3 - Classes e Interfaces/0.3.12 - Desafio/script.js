// Exercicio
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salva UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
// HTMLElements
const form = document.querySelector("#form");
const inputName = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputCpf = document.querySelector("#cpf");
window.UserData = {};
function handleInputNameEvent(e) {
    window.UserData.name;
    // console.log(window.UserData.name);
}
inputName?.addEventListener("keyup", handleInputNameEvent);
export {};
//# sourceMappingURL=script.js.map