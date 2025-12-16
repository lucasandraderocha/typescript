// Type Assertion e suas Sintaxes
// 'as' Operator
const player = document.querySelector("#player");
console.log(player.volume * 0.35);
console.log(document);
async function fetchProduct() {
    const res = await fetch("https://api.origamid.dev/json/notebook.json");
    return res.json();
}
async function handleProduct() {
    const product = (await fetchProduct());
    console.log(product.nome);
}
handleProduct();
// '!' non-null operator
const video = document.querySelector("video");
console.log(video);
video.volume;
// Outros tipos de sintaxes
const videoA = document.querySelector("video");
const videoB = document.querySelector("video");
const videoC = document.querySelector("video");
videoA.volume;
videoB?.volume;
videoC?.volume;
// ou
const videoEl = videoC;
videoEl.volume;
export {};
//# sourceMappingURL=script.js.map