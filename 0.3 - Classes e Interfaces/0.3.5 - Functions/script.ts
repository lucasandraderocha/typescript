function fn(argv: string): object;
function fn(argv: string, argc: "text"): object;
function fn(argv: string, argc: "json"): object;
function fn(argv: string, argc?: "json" | "text"): string | object {
  if (argc) return {};
  const postArg = {
    TextDecoder: argv,
    json: { argv },
  };

  return postArg[argc];
}

console.log(fn("url.com.br/", "json"));
console.log(fn("url.com.pt/"));
