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
function fnExe(value) {
    const roundUpNum = (value) => Math.ceil(value);
    const roundUpStr = (value) => {
        const sanitizedValue = Number(value);
        return String(Math.ceil(sanitizedValue));
    };
    const roundUpArr = (value) => value.map(item => Math.ceil(item)).join("-");
    if (Array.isArray(value)) {
        return roundUpArr(value);
    }
    else if (typeof value === "string") {
        return roundUpStr(value);
    }
    else {
        return roundUpNum(value);
    }
}
console.log(fnExe([19.2, 25.6, 10.02].map(item => item + 2)));
// interface Baskhara {
//   delta(a: number,b: number,c:number): number {
//     return Math.exp(b)
//   }
// }
console.log("Exponencial: ", Math.exp(1));
export {};
//# sourceMappingURL=script.js.map