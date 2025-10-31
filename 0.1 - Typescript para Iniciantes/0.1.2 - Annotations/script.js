const produtos = [
  {
    produto: "Fifa 14",
    tipo: "jogo",
  },
  {
    produto: "Senhor dos Anéis",
    tipo: "livro",
  },
  {
    produto: "Mortal Kombat X",
    tipo: "jogo",
  },
];

function filterBook(obj, type, filter) {
  return obj.filter(item => {
    return item[type] === filter;
  });
}

const filteredBooks = filterBook(produtos, "tipo", "livro");

console.log(filteredBooks);
