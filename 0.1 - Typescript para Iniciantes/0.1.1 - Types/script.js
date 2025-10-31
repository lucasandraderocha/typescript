// O javascript é uma linguagem que roda apenas em runtime
// Então em casos de erros, só ficará evidente sobre o erro quanod você rodar esse código.

//  Por exemplo: Ao Declararmos uma variávels do tipo String e imprimirmos no console
//  Notamos que tudo ocorre como planejado, pois é como deve ser
let ditado = "Só sei que nada sei.";

// console.log(ditado); // Só sei que nada sei

// Se formos mais longe com a linguagem podemos utilizar algum método para nos auxiliar com alguma tarefa
// Vamos com um exemplo utilizando o toLowecase()
// Se voc~e testar isso rodará tranquilamente, pois é como deve ser.
ditado.toLowerCase();

// Agora vamos encarar outro caso
//  Vamos declarar um variável qeu contenha valor do tipo Number
// E vamos ver o que ocorre utilizando o mesmo método anterior: o toLowercase()
let idade = 99;

// idade.toLowecase(); // script.js:20 Uncaught TypeError: idade.toLowecase is not a function

// Nenhum erro ocorre. Por que?
// O erro só vai ocorrer quando o código estiver em runtime, o que deixa claro por que de não
// ter sido denunciado nenhum erro até rodarmos a aplicação;

// Mais alguns testes

let i = idade.toFixed();

// Aqui percebemos que a variável 'i' recebeu como valor uma string,
// pois o método toFixed() tem como retorno de função uma string.
// Mesmo que o idade ainda seja uma número o retorno da função sempre gerará o mesmo resultado
// console.log(i + 10); // 9910
