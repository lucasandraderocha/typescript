const api = `https://api.origamid.dev/json/notebook.json`;
async function fetchProduct() {
    const res = await fetch(api);
    const data = await res.json();
    displayFetchedProduct(data);
}
fetchProduct();
function displayFetchedProduct(data) {
    return document.body.innerHTML += `
    <div>
      <h1>Produto: ${data.nome}</h1>
      <p>Preço: R$${data.preco}</p>
      <p>Descrição: ${data.descricao}</p>
      <span>Garantia: ${data.garantia} anos</span>
      <span>Seguro Contra Acidentes: ${data.seguroAcidentes ? "Sim" : "Não"}</span>
      <div>
        <span>Empresa Montadora</span>
        <ul>
          <li>Nome: ${data.empresaMontadora.nome}</li>
          <li>País: ${data.empresaMontadora.pais}</li>
          <li>Fundação: ${data.empresaMontadora.fundacao}</li>
          </ul>
          <span>Empresa Fabricante</span>
          <ul>
          <li>Nome: ${data.empresaFabricante.nome}</li>
          <li>País: ${data.empresaFabricante.pais}</li>
          <li>Fundação: ${data.empresaFabricante.fundacao}</li>
        </ul>
      </div>
    </div>
  `;
}
export {};
//# sourceMappingURL=script.js.map