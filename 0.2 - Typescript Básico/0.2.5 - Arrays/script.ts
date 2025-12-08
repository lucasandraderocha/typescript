const api = `https://api.origamid.dev/json/cursos.json`

interface Cursos {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: Array<number>;
  nivel: "iniciante" | "avancado";
  nome: string;
  tags: Array<string>;
}



async function fetchCursos() {
  const res = await fetch(api)
  const data = await res.json()
  console.log(data)
  displayCursos(data)  
}

fetchCursos()


function displayCursos(data: Cursos[]) {
  data.forEach(curso => {
    return document.body.innerHTML += `
    <div>
      ${curso.nivel === "iniciante" ? `<h1 style="background: blue; color: white;">${curso.nome}</h1>`:`<h1 style="background: red; color: white;">${curso.nome}</h1>`}
      <h2>${curso.gratuito ? "Gratuito": "Pago"}</h2>
      <span>${curso.horas} horas</span>
      <p>${curso.aulas} aulas</p>
      <div>
        <p>Aulas:</p>
        <ul>
          ${curso.idAulas.map( aula => {
            return `<li>${aula} - Aula</li>`
          })}
        </ul>
      </div>
      <div>
          <p>Tag</p>
          ${curso.tags.map(tag => {
            return `<span> #${tag}</span>`
          })}
      </div>
    </div>`
  })
}