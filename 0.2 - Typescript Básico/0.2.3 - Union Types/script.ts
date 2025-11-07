 let total: string | number | boolean = 700;

 total = 300

 const isNumber = (arg: string | number): number => {

  if(typeof arg === "number") {
    return 1
  }
 return 0
 }
 
let result = isNumber(total);

console.log(result)

if(isNumber(220)){
  console.log("É um Number")
}
 

const btn = document.querySelector("button");

btn?.click();

//  Exercícios
let toConvert: string | number = 3;

// 1 - Crie uma função chamada toNumber
const toNumber = (arg: string | number) => {
  //  2 - Verifique se:
  switch(typeof arg) {
    //  3 - Verifique se: é igual uma string
    case "string":
      return Number(arg)
      break
      //  3 - Verifique se: é igual uma number
      case "number":
        return arg;
        break;
      //  4 - Verifique se: em nenhum dos caso retorne um erro utilizando throw
    default:
      throw  "Use: <args> must be a number or a string";
  }
}

console.log(toNumber(toConvert))