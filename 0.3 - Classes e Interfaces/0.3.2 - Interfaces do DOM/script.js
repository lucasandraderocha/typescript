const linkHeader = document.querySelectorAll(".link");
function modifyElement(el) {
    el.style.border = "2px solid red";
    el.style.color = "red";
}
linkHeader.forEach(link => {
    if (link instanceof HTMLElement) {
        modifyElement(link);
    }
});
export {};
//# sourceMappingURL=script.js.map