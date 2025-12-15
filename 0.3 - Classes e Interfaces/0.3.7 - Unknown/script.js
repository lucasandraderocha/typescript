function showProductSpecs(data) {
    if ("message" in data) {
        return {
            data,
            message: data.message,
        };
    }
    else if ("data.id" in data) {
        return {
            data,
        };
    }
    return data;
}
const test = showProductSpecs({
    data: {
        id: 1,
        name: "hummel",
        price: 24,
    },
    message: {
        from: "casca",
        date: "05-07-19",
        content: "Content here",
    },
});
console.log(test);
export {};
//# sourceMappingURL=script.js.map