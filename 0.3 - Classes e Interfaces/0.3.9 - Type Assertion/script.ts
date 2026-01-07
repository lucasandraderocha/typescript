// Type Assertion e suas Sintaxes

// 'as' Operator
const player = document.querySelector("#player") as HTMLVideoElement;

console.log(player.volume * 0.35);
console.log(document);

interface Product {
  nome: string;
  preco: number;
}

async function fetchProduct() {
  const res = await fetch("https://api.origamid.dev/json/notebook.json");
  return res.json() as Promise<Product>;
}

async function handleProduct() {
  const product = (await fetchProduct()) as Product;
  console.log(product.nome);
}
handleProduct();

// '!' non-null operator
const video = document.querySelector("video")!;

console.log(video);
video.volume;

// Outros tipos de sintaxes
const videoA = <HTMLVideoElement>document.querySelector("video");
const videoB = document.querySelector<HTMLVideoElement>("video");
const videoC = document.querySelector("video");

videoA.volume;
videoB?.volume;
videoC?.volume;
// ou
const videoEl = videoC as HTMLVideoElement;
videoEl.volume;
