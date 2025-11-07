let anotherProduct = "Another Product";
const product = {
    id: 1,
    title: "Product 1",
    price: 99,
    category: ["any"],
    hasDiscount: false
};
console.log({
    product,
    anotherProduct
});
function somar(a, b) {
    return a + b;
}
console.log(somar(1, 2));
// Exercícios
// Corrigir função
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
// Corrigir Aplicação
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input?.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p)
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
input?.addEventListener("keyup", totalMudou);
export {};
//# sourceMappingURL=script.js.map