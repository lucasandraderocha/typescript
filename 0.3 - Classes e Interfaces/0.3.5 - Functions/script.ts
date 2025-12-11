// Function Overloads 
function unityConverter(num: number): string;
function unityConverter(num: number, unity: "mm"| "cm"): number;
function unityConverter(num: number, unity?: "mm" | "cm"): number | string {
  if(typeof unity === "undefined") {

    return `Resultado: ${num}mm`
  }

  const unities = {
    mm: {result: num * 10, unity: "mm"},
    cm: {result: num / 10, unity: "cm"},
  }

  return unities[unity].result
}

console.log(unityConverter(9, "cm"))
console.log(unityConverter(9))