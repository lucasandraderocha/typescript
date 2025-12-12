function fn(argv, argc) {
    if (argc)
        return {};
    const postArg = {
        TextDecoder: argv,
        json: { argv },
    };
    return postArg[argc];
}
console.log(fn("url.com.br/", "json"));
console.log(fn("url.com.pt/"));
export {};
//# sourceMappingURL=script.js.map