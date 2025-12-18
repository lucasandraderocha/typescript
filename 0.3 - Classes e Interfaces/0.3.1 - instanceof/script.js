class Product {
    type;
    title;
    price;
    constructor(type, title) {
        this.title = title;
        this.type = type;
        this.price = 0;
    }
    getProductType() {
        return `Your product type is: ${this.type}`;
    }
    getProductTitle() {
        return `Your product title is: ${this.title}`;
    }
    setProductTitle(newTitle) {
        return (this.title = newTitle);
    }
    setProductPrice(newPrice) {
        return (this.price = newPrice);
    }
    getProductPrice() {
        return `Your product cost around: ${this.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })}`;
    }
}
class Game extends Product {
    title;
    type;
    meta;
    constructor(type, title) {
        super(type, title);
        this.title = title;
        this.type = type;
        this.meta = {};
    }
    setMeta(genre, localMulti, crossPlataform, mainPlataform, description) {
        return (this.meta = {
            ...this.meta,
            genre,
            localMulti,
            crossPlataform,
            mainPlataform,
            description,
        });
    }
}
class Book extends Product {
    title;
    type;
    meta;
    constructor(type, title) {
        super(type, title);
        this.title = title;
        this.type = type;
        this.meta = {};
    }
    setMeta(genre, pages, limitedEdition, description, publisher) {
        return (this.meta = {
            ...this.meta,
            genre,
            pages,
            limitedEdition,
            description,
            publisher,
        });
    }
}
const newGame = new Game("Game", "Dark Souls");
newGame.setMeta("Souls Like", "local", true, "Plastation", "A beautiful and dark game about dark and souls");
console.log(newGame);
const newBook = new Book("Book", "Game of Thrones");
newBook.setProductPrice(45);
newBook.getProductPrice();
newBook.setMeta("Dark Fantasy", 670, false, "A Dark Fantasy about a Throne and Dragons", "IDK");
console.log(newBook);
function searchProduct(search) {
    if (search === "Game of throne") {
        return new Book("Book", "Game of Thrones");
    }
    if (search === "Fifa") {
        return new Game("Game", "Fifa");
    }
    return null;
}
console.log(searchProduct("Fifa"));
export {};
//# sourceMappingURL=script.js.map