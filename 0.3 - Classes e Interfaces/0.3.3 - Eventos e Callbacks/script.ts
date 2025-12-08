//  const btn = document.querySelector("button");

//  function handleClick(this: HTMLButtonElement, e: MouseEvent) {
//   console.log(this)
//  }
 
//  btn?.addEventListener("click", handleClick)


// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const nav = document.querySelector("#nav");
const btnMobile = document.querySelector("#btn-mobile")


// Versão 2
function toggleMenu(event: Event) {
  const button = event.currentTarget as HTMLButtonElement | null;

  if(button instanceof HTMLElement && nav) {
    nav?.classList.toggle("active");
    const active = nav.classList.contains("active");
    if(active) {
      button.setAttribute("aria-expanded", "true")
      button.setAttribute("aria-label", "Abrir Menu")
    }else {
      button.setAttribute("aria-expanded", "false")
      button.setAttribute("aria-label", "Fechar Menu")
    }

  }
}

btnMobile?.addEventListener("pointerdown", toggleMenu)