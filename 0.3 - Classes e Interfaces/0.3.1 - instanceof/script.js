class Product {
    model;
    price;
    releasedAt;
    constructor(model, price, releasedAt) {
        this.model = model;
        this.price = price;
        this.releasedAt = releasedAt;
    }
    setPrice(newPrice) {
        return this.price = newPrice;
    }
}
const cellphone = new Product("Galazy Z6", 3000, "04-05-16, 13:00:00 UTM");
const game = new Product("Playstation", 1000, "02-09-96, 00:00:00 UTM");
// console.log({cellphone, game})
// console.log(game instanceof Product)
// console.log(cellphone instanceof Product)
class Smartphone extends Product {
    brand;
    constructor(model, price, releasedAt, brand) {
        super(model, price, releasedAt);
        this.brand = brand;
    }
}
const appel = new Smartphone("iPon K", 999999, "18-09-18, 22:00:00UTM", "Appel");
// console.log(appel)
const link = document.getElementById("origamid");
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("https://", "https://");
}
console.log(link?.getAttribute("href"));
console.log(link instanceof HTMLElement);
export {};
//# sourceMappingURL=script.js.map