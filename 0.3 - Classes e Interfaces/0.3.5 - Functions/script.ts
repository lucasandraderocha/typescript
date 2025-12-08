//  function sum<G>(numA: G): G {
//   return numA
//  }

//  const summed = sum<boolean>(true)

//  console.log(summed)


//  const numeros = [1,2,3,4,5,6,7]
//  const frutas = ["Maçã","Pêra","Melância","Abacaxi","Abacate","Uva","Banana"]

//  const firstFive = <G>(lista: G[]) => {
//   return lista.slice(0, 5);
//  }


//  console.log(firstFive(numeros))
//  console.log(firstFive(frutas))

 const p = document.createElement("p")
 const button = document.createElement("button")

 p.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi temporibus similique harum voluptate, nulla impedit adipisci quisquam eos commodi inventore asperiores laboriosam, corrupti, nemo eaque quas nobis hic doloribus debitis!
    Dicta nemo fugiat, ipsum nulla harum doloremque ullam, aliquid earum, corrupti accusamus atque. Nobis rerum blanditiis asperiores porro. Exercitationem eum quidem provident itaque est libero non aspernatur possimus vel quia.
    Animi et corporis excepturi sed qui pariatur inventore quod mollitia hic enim ipsa sequi dolorem, doloribus, perferendis ducimus praesentium optio! Quos tenetur corporis est voluptatibus tempora, quia qui laudantium repellendus.
    Qui assumenda, velit molestias ad labore nihil, amet eum quibusdam excepturi officiis, magni sequi deleniti quaerat corrupti repellat perspiciatis harum. Eveniet harum aperiam aliquid veritatis a cumque rem, non quas.
    Voluptate perspiciatis officia laborum repellat. Corrupti accusantium voluptate culpa mollitia. Libero amet ipsam sit deserunt similique quaerat eos? Illo itaque expedita quo totam alias consequuntur nihil, debitis quae ex distinctio.`


button.innerText = "Click me"
    
const extractText = <T extends HTMLElement> (el: T) => {
      return {text: el.textContent,el}
}

console.log(extractText(p))
console.log(extractText(button))

const getData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url)
  return await res.json()
}

interface Notebook {
  nome: string;
  preco: number;
}

const getProduct = async () => {
  const notebook = await getData<Notebook>("https://api.origamid.dev/json/notebook.json")
  console.log({nome: notebook.nome, preco: notebook.preco})
}


getProduct()