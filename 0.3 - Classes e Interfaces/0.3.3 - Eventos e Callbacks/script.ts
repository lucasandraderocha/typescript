// const button = document.querySelector("button");

// console.log(button);

// button?.addEventListener("click", () => {
//   console.log(button);
// });

// function handleEvent(event: KeyboardEvent): void;
// function handleEvent(event: MouseEvent): void;
// function handleEvent(event: Event): void;
// function handleEvent(event: Event | MouseEvent | KeyboardEvent): void {
//   if (event instanceof KeyboardEvent) {
//     console.log(event.key);
//   } else if (event instanceof MouseEvent) {
//     console.log({ clientX: event.clientX, clientY: event.clientY });
//   }
// }

// document.documentElement.addEventListener("mousedown", handleEvent);
// document.documentElement.addEventListener("touchstart", handleEvent);
// document.documentElement.addEventListener("keydown", handleEvent);

// Exercício

// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const btnMobile = document.querySelector<HTMLButtonElement>("#btn-mobile");
const nav = document.querySelector<HTMLElement>("#nav");
function handleEvent(event: TouchEvent): void;
function handleEvent(event: PointerEvent): void;
function handleEvent(event: MouseEvent): void;
function handleEvent(
  event: Event | MouseEvent | PointerEvent | TouchEvent
): void {
  const button = event.currentTarget;
  nav?.classList.toggle("active");
  if (button instanceof HTMLElement) {
    if (nav?.classList.contains("active")) {
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Fechar Menu");
    } else {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir Menu");
    }
  }
}

btnMobile?.addEventListener("pointerdown", handleEvent);
