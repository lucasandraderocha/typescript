const fetchedProduct = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();
  console.log(json);
  let product = handleProduct(json);
  console.log(product);
};
fetchedProduct();

type Product = Array<object>;

const handleProduct = (data: Product) => {
  return data.filter(item => {
    return "category" in item && item.category === "men's clothing"
      ? item
      : null;
  });
};
