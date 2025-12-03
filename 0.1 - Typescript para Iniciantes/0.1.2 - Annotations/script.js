const produtos = [
  {
    produto: "Fifa 14",
    categoria: "jogo",
  },
  {
    produto: "Senhor dos Anéis",
    categoria: "livro",
  },
  {
    produto: "Mortal Kombat X",
    categoria: "jogo",
  },
];

function filterBook(obj, type, filter) {
  return obj.filter(item => {
    return item[type] === filter;
  });
}

const filteredBooks = filterBook(produtos, "categoria", "livro");

console.log(filteredBooks);
