type Car = {
  price: number;
};

type Product = {
  wheel: number;
  door: number;
};

const newProduct = (data: Car & Product) => {
  return {
    data: "Success! Congratulation for your bought",
  };
};
console.log(newProduct({ price: 55, wheel: 4, door: 5 }));
console.clear();
