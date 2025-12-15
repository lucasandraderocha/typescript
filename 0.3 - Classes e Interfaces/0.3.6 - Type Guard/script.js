const fetchedProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    handleProduct(json);
};
const handleProduct = (data) => {
    if ("price" in data) {
        return data;
    }
};
console.log(fetchedProduct());
export {};
//# sourceMappingURL=script.js.map