function test(v) {
    if (v instanceof HTMLElement) {
        let p = document.createElement("p");
        p.innerText = "Hello world";
        return v.appendChild(p);
    }
    if (typeof v === "number") {
        return v.toFixed(2);
    }
    if (typeof v === "string") {
        return v.toUpperCase();
    }
}
console.log(test("Olá"));
console.log(test(100));
console.log(test(document.body));
export {};
//# sourceMappingURL=script.js.map