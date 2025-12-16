// const { body } = document;
// console.log(body);
function handleData({ nome }) {
    return nome;
}
console.log(handleData({
    nome: "lucas",
}));
const handleEventClick = ({ target, pageY, }) => {
    if (target instanceof HTMLElement) {
        target.innerHTML = `<h1>clicked on position X: ${pageY}</h1>`;
    }
};
// document.documentElement.addEventListener("click", handleEventClick);
const rect = { x: 25, y: 35, width: 35, height: 15 };
const { height, width, x, y, } = rect;
console.log({ height, width });
console.log({ x, y });
const obj = { "some-property": "some value" };
const { "some-property": someProperty } = obj;
console.log({ someProperty });
console.log(someProperty === "some value");
console.log(someProperty);
const coord = { a: 1, b: 4, c: 6, d: 9 };
const { a, b, ...remainingCoord } = coord;
console.log({ a, b, remainingCoord });
let t = 1, h = 2;
[t, h] = [h, t];
console.log([{ 0: t }, { 1: h }]);
export {};
//# sourceMappingURL=script.js.map