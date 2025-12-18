// Exercício 0
const link = document.getElementById("origamid");
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("http", "https");
}
// console.log(link);
//  Exercício 1
function logLinkHref(selector) {
    let element = document.querySelector(selector);
    if (element) {
        return {
            href: element.href,
            textContent: element.textContent,
            element,
        };
    }
    return null;
}
// console.log(logLinkHref(".linkEspecifico"));
//  Exercício 2
function elementProcessor(el) {
    if (el instanceof HTMLInputElement) {
        el.placeholder = "Digite Aqui...";
        return el;
    }
    else if (el instanceof HTMLButtonElement) {
        el.innerText = "Clicado";
        return el;
    }
    else if (el instanceof HTMLElement) {
        el.style.backgroundColor = "yellow";
        return el;
    }
    else {
        return null;
    }
}
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
// if (btn) {
//   console.log({ btn: elementProcessor(btn) });
// }
// if (input) {
//   console.log({ input: elementProcessor(input) });
// }
// if (container) {
//   console.log({
//     container: elementProcessor(container),
//   });
// }
//  Exercicio 3
class ValidationError extends Error {
    field;
    constructor(field) {
        super(field);
        this.field = field;
    }
    handleFormError(err) {
        if (err instanceof ValidationError) {
            let elErr = document.getElementById(err.field);
            if (elErr) {
                elErr.style.border = "1px solid red";
            }
            return elErr;
        }
        else if (err instanceof Error) {
            alert(err.message);
            return err.message;
        }
        return null;
    }
}
const ALLLinks = document.querySelectorAll(".linkEspecifico");
// ALLLinks.forEach(link => {
//   if (link instanceof HTMLAnchorElement) {
//     console.log(link);
//   }
// });
// Exercicio 4
const allLinks = document.querySelectorAll(".link");
console.log(allLinks);
const modBorderCorlor = (element) => {
    element.style.border = "2px solid red";
    element.style.color = "red";
    return element;
};
allLinks.forEach(link => {
    if (link instanceof HTMLElement)
        modBorderCorlor(link);
});
export {};
//# sourceMappingURL=script.js.map