// Padrão Notação
const produto = "1984";
const preco = 99.9;
let categoria = "ficção científica";
categoria = "Distopia";
const livro = {
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
    metadata: { id: 12394584512, charGlue: "@5959*" },
    previa: (usuario) => {
        return { paginas: 20, min_tempo: 30, user: usuario };
    }
};
// Padrão Inferência
const cidade = "Blumenau";
const shopping = 5;
let tamanho = "Grande";
const localizacao = {
    cidade: cidade,
    locais: [shopping, "Parque Ramiro", "Biergarten", "Museu de Blumenau", "Vila Germânica"],
    dimensao: tamanho,
    saudacao: () => console.log("Olá pessoal, Sejam Bem vindos.")
};
const geradorMegaSena = (arg) => {
    const cartela = [];
    for (let i = 0; cartela.length < 16; i++) {
        let mark = arg * Math.floor(Math.random() * 10);
        let arrMarkBuffer = [];
        if (mark <= 0 || mark > 60) {
            arrMarkBuffer.pop();
            cartela.pop();
        }
        else {
            arrMarkBuffer.push(mark);
            cartela.push(mark);
        }
    }
    return cartela;
};
console.log(geradorMegaSena(8));
// Exercícios
//  Conserte a função com typescript
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto("HellO World! :- )"));
export {};
//# sourceMappingURL=script.js.map