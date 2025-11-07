
// Padrão Notação
const produto: string = "1984";
const preco: number = 99.9;

let categoria = "ficção científica";

categoria = "Distopia";

const livro: {
  titulo: string;
  tipo: string;
  paginas: number;
  categoria: string;
  has_stock: boolean;
  avaliacoes: Array<Object>;
  metadata: Object;
  previa: Function;
} = {
  titulo: "Garfield",
  tipo: "Quadrinho",
  paginas: 180,
  categoria: "infantil",
  has_stock: true,
  avaliacoes: [
    {
    usuario: "_3459045234XB",
    nota: 5,
    avaliacao: "Muito bom esse livro, meu filho amou"
  },
  {
    usuario: "_41305496639A",
    nota: 3,
    avaliacao: "O livro veio rasgado, mas minhas crianças amam lê-lo"
  }
],
  metadata: {id: 12394584512, charGlue: "@5959*"},
  previa: (usuario: string) => {
    return {paginas: 20, min_tempo: 30, user: usuario}}
}

// Padrão Inferência

const cidade = "Blumenau"
const shopping = 5

let tamanho = "Grande"

const localizacao: Object | Number = {
  cidade: cidade,
  locais: [shopping, "Parque Ramiro", "Biergarten", "Museu de Blumenau", "Vila Germânica"],
  dimensao: tamanho,
  saudacao: () => console.log("Olá pessoal, Sejam Bem vindos.")
}

const geradorMegaSena = (arg: number): Array<Number> => {
  const cartela: Array<Number> = [];
  for(let i = 0; cartela.length < 16; i++) {
    let mark: number = arg * Math.floor(Math.random() * 10);
    let arrMarkBuffer: Array<Number> = []
    if(mark <= 0 || mark > 60) {
      arrMarkBuffer.pop()
      cartela.pop()
    }
      else {arrMarkBuffer.push(mark)
        cartela.push(mark)
      }
  }
  return cartela;
} 


console.log(geradorMegaSena(8))

// Exercícios
//  Conserte a função com typescript
function normalizarTexto(texto: string): String {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto("HellO World! :-  )", 9))