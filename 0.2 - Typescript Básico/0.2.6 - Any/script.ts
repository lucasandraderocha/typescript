const api = `https://api.jikan.moe/v4/manga/144180/full`

const fetchApi = async () => {
  const res = await fetch(api)
  // Caso mais comum de uso inferido para Any é ao transformar um Response em json
  const data = await res.json()
  console.log(data)
}

fetchApi()


// Outros casos podem envolver a refatoração de um código em JS para TS
// O uso não se dá por aceitável, mas ainda assim é um pouco mais comum
function somar(numberA: any, numberB: any) {
  return numberA + numberB;
}

