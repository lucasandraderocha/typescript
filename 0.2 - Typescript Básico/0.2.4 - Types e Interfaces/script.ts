interface ProductInterface {
  title: string;
  price: number;
  hasKeyboard: boolean;  
}

type ProductType =  {
  title: string;
  price: number;
  hasKeyboard: boolean;  
}

const filledData = (data: ProductInterface) => {
  return document.body.innerHTML += `
    <div style="font-family:helvetica; color: #333; ">
      <h2>${data.title}</h2>
      <ul style="list-style-type: none;">
        <li>${data.price}</li>
        <li><strong>${data.hasKeyboard ? "sim" : "não"}</strong></li>
      </ul>
    </div>
  `
 }

 filledData({
  title: "Notebook",
  price: 2500,
  hasKeyboard: true
 });

  filledData({
  title: "Alienware",
  price: 5000,
  hasKeyboard: false
 })

 type Category = "gamer" | "programming" | "casual";

 const categoryPrint = (arg: Category): string => {
    if(arg === "gamer")
      throw "<Gamer>: Está categoria foi descontinuada.";

    return arg
 }

//  console.log(categoryPrint("gamer"))

//  Exercícios
//  Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.

async function productFetch() {
  const api = "https://api.origamid.dev/json/notebook.json"
  const res = await fetch(api);
  const json = await res.json();
  console.log(json)
  showProduct(json)
}

productFetch()
interface Empresa {
    fundacao: number;
    nome: string;
    pais: string;
  };

interface OrigamidInterface {
  descricao: string;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
  garantia: string | number;
  nome: string;
  preco: number;
  seguroAcidentes: boolean;
}


function showProduct(data: OrigamidInterface) {
  return document.body.innerHTML += 
    `<div>
        <h2>${data.nome}</h2>
        <ul style="list-style-type: none;">
          <li>${data.preco}</li>
          <li>${data.descricao}</li>
          <li>
            Empresa Fabricante:
            <ul>
              <li>${data.empresaFabricante.nome}</li>
              <li>${data.empresaFabricante.fundacao}</li>
              <li>${data.empresaFabricante.pais}</li>
            </ul>
          </li>
          <li>            
            Empresa Montadora:
            <ul>
              <li>${data.empresaMontadora.nome}</li>
              <li>${data.empresaMontadora.fundacao}</li>
              <li>${data.empresaMontadora.pais}</li>
            </ul>
          </li>
          <li>${data.garantia}</li>
          <li><strong>${data.seguroAcidentes ? "sim" : "não"}</strong></li>
        </ul>
    </div>`
  }