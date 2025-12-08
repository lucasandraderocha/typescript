let total = 700;
total = 300;
const isNumber = (arg) => {
    if (typeof arg === "number") {
        return 1;
    }
    return 0;
};
let result = isNumber(total);
console.log(result);
if (isNumber(220)) {
    console.log("É um Number");
}
const btn = document.querySelector("button");
btn?.click();
// Exercícios
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um number, retorne o número
// 4 - Se a função receber uma string, retorne o número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(arg) {
    if (typeof arg === "number") {
        return arg;
    }
    else if (typeof arg === "string" && arg.charCodeAt(0) >= 48 && arg.charCodeAt(0) <= 57) {
        return Number(arg);
    }
    else {
        throw "value deve ser um número | string";
    }
}
console.log(toNumber("2s"));
export {};
//# sourceMappingURL=script.js.map