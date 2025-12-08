const button = document.querySelector("button")
const config = localStorage.getItem("config")


if(button) {
  button.click();
}

button?.addEventListener("click", () => console.log("Hellom World!"));


let total;
console.log(total);
