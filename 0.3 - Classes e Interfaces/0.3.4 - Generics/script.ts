// const logGeneric = <T>(arg: T): T => {
//   return arg
// }

// console.log(logGeneric<string[]>(["Maçã", "Pêra", "Melância"]))
// console.log(logGeneric<number[]>([9,9,8]))
// console.log(logGeneric<object>({list: "list"}))


// const numeros = [1,2,3,4,5,6,7,8]
// const frutas = ["fruta a", "fruta b", "fruta c ", "frutas d", "frutas e", "frutas f"]


// console.log({
//   numeros, frutas
// })

// const firstFive = <T>(list: T[]): T[] => {
//   return list.slice(0,4)
// }

// console.log(firstFive<number>(numeros))
// console.log(firstFive<string>(frutas))


// const typeOf = () => {
//   let types = {}
//   const linkType = <T>(data: T): object => ({
//     data,
//     type: typeof data
//   })

//   return {
//     get types() {return types},
//     type: <T>(data: T): object => linkType(data),
//   }
// }



// const x = typeOf()
// console.log(x.type("baralho"))
// console.log(x.type(2))

// const element = document.createElement("div")
// element.classList.add("container")
// element.innerHTML = "Hello, world."
// const extractTextElement = <T extends HTMLElement>(el: T) => {
//   return el
// }


// function _<T extends Element>(selector: string): T | null {
//   return document.querySelector(selector)
// }
// const div = _<HTMLDivElement>(".container")?.dataset

// console.dir(div)

const create = <T extends Element>(argv: string): HTMLElement | null => {
  return document.createElement(argv)
}

const div = create("div")

const getData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url)
  return await res.json()
}

interface Notebook {
  nome: string;
  preco: number;
  descricao: string;
}

const notebook = await getData<Notebook>("https://api.origamid.dev/json/notebook.json")

if(div) { 
  div.innerHTML = String(new Date().toLocaleDateString("pt-BR", {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }))
  
  div.innerHTML += notebook.nome 
  document.body.appendChild(div)
}