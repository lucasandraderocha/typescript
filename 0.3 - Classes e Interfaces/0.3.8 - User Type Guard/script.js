const fetchCourse = async () => {
    const res = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await res.json();
    handleCourse(json);
};
fetchCourse();
const handleCourse = (data) => {
    if (Array.isArray(data)) {
    }
};
//  Type Predicate
function isString(data) {
    return typeof data === "string";
}
function handleData(data) {
    if (isString(data)) {
        // console.log(data.isWellFormed());
    }
}
handleData("foo");
handleData("bar");
const fetchProduct = async () => {
    const res = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await res.json();
    handleProduct(json);
};
fetchProduct();
const isProduct = (data) => {
    if (data && typeof data === "object" && "nome" in data && "preco" in data) {
        return true;
    }
    else {
        return false;
    }
};
const handleProduct = (data) => {
    if (isProduct(data)) {
        // console.log("YOOO");
    }
};
// Exercicio
const fetchOtherProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    // console.log(JSON.stringify(json[0], null, 2));
    handleOtherProducts(json);
};
fetchOtherProducts();
const isOtherProduct = (data) => {
    if (data && typeof data === "object" && "title" in data && "price" in data) {
        return true;
    }
    else {
        return false;
    }
};
const handleOtherProducts = (data) => {
    if (Array.isArray(data)) {
        data.filter(isOtherProduct).forEach(item => (document.body.innerHTML += `
      <div>
        <span>${item.id}</span>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <span>${(item.price * 5).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })}</span><br>
        <span>${item.category}</span><br>
        <span>${item.rating.count}</span>
        </div>
      `));
    }
};
export {};
//# sourceMappingURL=script.js.map