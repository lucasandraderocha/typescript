async function fetchCursos() {
    const res = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await res.json();
    handleCursos(json);
    handleAlt(json);
}
fetchCursos();
function isCurso(data) {
    if (data && typeof data === "object" && "nome" in data && "horas" in data) {
        return true;
    }
    else {
        return false;
    }
}
// Versão Piorada
function handleCursos(data) {
    if (data instanceof Array) {
        data.map(item => {
            if (isCurso(item)) {
                document.body.innerHTML += `
        <div>
          <h1>${item.nome}</h1>
          <span>${item.horas}h</span>
          <ul>
            ${item.tags.map(tag => {
                    return `<li>${tag}</li>`;
                })}
          </ul>
        </div>
        `;
            }
        });
    }
}
// Versão Melhor
function handleAlt(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach(item => {
            document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <span>${item.horas}h</span>
          <span>${item.tags.join(", ")}</span>
        </div>
      `;
        });
    }
}
export {};
//# sourceMappingURL=script.js.map