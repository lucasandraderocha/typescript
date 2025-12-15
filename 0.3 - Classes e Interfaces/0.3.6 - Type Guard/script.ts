const fetchedProduct = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();
  handleProduct(json);
};

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: object;
}

const handleProduct = (data: Product) => {
  if ("price" in data) {
    return data;
  }
};

console.log(fetchedProduct());
