// Never
function isNever(arg) {
    throw new Error(arg);
}
// isNever("Problema no Código, tente novamente");
// Void
function isVoid(a, fixedTo) {
    let result = a.toFixed(fixedTo);
    console.log(result);
}
isVoid(16, 2);
function formatDataStrategy(value, format) {
    const toCurrency = (value) => ({
        value: value.toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
        }),
    });
    const toPercent = (value) => ({ value: `${value / 100}%` });
    const toUpperCase = (value) => ({
        value: value.toUpperCase(),
    });
    const executionMapNumber = {
        currency: toCurrency,
        percent: toPercent,
    };
    const executionMapString = {
        uppercase: toUpperCase,
    };
    if (typeof value === "number") {
        return executionMapNumber[format](value);
    }
    return executionMapString.uppercase(value);
}
console.log(formatDataStrategy(500, "currency"));
console.log(formatDataStrategy(50, "percent"));
console.log(formatDataStrategy("tome desconto", "uppercase"));
function buildUrl(base, argt) {
    const toRecord = (base, params) => {
        const query = Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");
        return `${base}?${query}`;
    };
    const toSegment = (base, segments) => segments.map(seg => {
        return `${base}/${seg}`;
    });
    const executionMap = {
        params: toRecord,
        segment: toSegment,
    };
    if (!Array.isArray(argt))
        return executionMap.params(base, argt);
    return executionMap.segment(base, argt);
}
console.log(buildUrl("www.url.com", {
    k: "k",
    l: "l",
    m: "m",
}));
console.log(buildUrl("www.url.com", ["path", "path"]));
function fnExe(argv) {
    function roundUpNumber(n) {
        return Math.ceil(n);
    }
    function roundUpStr(n) {
        return String(Math.ceil(Number(n)));
    }
    if (typeof argv === "string") {
        return roundUpStr(argv);
    }
    else {
        return roundUpNumber(argv);
    }
}
console.log(fnExe("45.7"));
export {};
//# sourceMappingURL=script.js.map