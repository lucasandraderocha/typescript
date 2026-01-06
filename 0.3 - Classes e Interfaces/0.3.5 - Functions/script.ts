// Never

function isNever(arg: string): never {
  throw new Error(arg);
}

// isNever("Problema no Código, tente novamente");

// Void
function isVoid(a: number, fixedTo: number): void {
  let result = a.toFixed(fixedTo);
  console.log(result);
}

isVoid(16, 2);

// Function Overloading
function formatDataStrategy(value: number, format: "currency"): object;
function formatDataStrategy(value: number, format: "percent"): object;
function formatDataStrategy(value: string, format: "uppercase"): object;
function formatDataStrategy(
  value: string | number,
  format: "currency" | "percent" | "uppercase"
): object {
  const toCurrency = (value: number): object => ({
    value: value.toLocaleString("pt-BR", {
      currency: "BRL",
      style: "currency",
    }),
  });
  const toPercent = (value: number): object => ({ value: `${value / 100}%` });
  const toUpperCase = (value: string): object => ({
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
    return executionMapNumber[format as "currency" | "percent"](value);
  }

  return executionMapString.uppercase(value);
}

console.log(formatDataStrategy(500, "currency"));
console.log(formatDataStrategy(50, "percent"));
console.log(formatDataStrategy("tome desconto", "uppercase"));

function buildUrl(base: string, params: Record<string, string>): string;
function buildUrl(base: string, segments: string[]): string[];
function buildUrl(
  base: string,
  argt: Record<string, string> | string[]
): string | string[] {
  const toRecord = (base: string, params: Record<string, string>): string => {
    const query = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    return `${base}?${query}`;
  };
  const toSegment = (base: string, segments: string[]): string[] =>
    segments.map(seg => {
      return `${base}/${seg}`;
    });
  const executionMap = {
    params: toRecord,
    segment: toSegment,
  };
  if (!Array.isArray(argt)) return executionMap.params(base, argt);

  return executionMap.segment(base, argt);
}

console.log(
  buildUrl("www.url.com", {
    k: "k",
    l: "l",
    m: "m",
  })
);

console.log(buildUrl("www.url.com", ["path", "path"]));

type defaultConfig = { timeout: number };
type fullConfig = { timeout: number; logging: boolean };

//  Exercicios
function fnExe(arv: string): string;
function fnExe(arv: number): number;
function fnExe(argv: string | number): string | number {
  function roundUpNumber(n: number): number {
    return Math.ceil(n);
  }
  function roundUpStr(n: string): string {
    return String(Math.ceil(Number(n)));
  }

  if (typeof argv === "string") {
    return roundUpStr(argv);
  } else {
    return roundUpNumber(argv);
  }
}

console.log(fnExe("45.7"));
