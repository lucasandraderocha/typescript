const bodyStyle = () => {
  const {style} = document.body;
  style.display = "flex"
  style.height = "100vh"
  style.margin = "0"
  style.padding = "0"
  style.boxSizing = "border-box"
  style.flexDirection = "column"
  style.justifyContent = "center"
  style.alignItems = "center"
  style.fontFamily = "Helvetica", "system-ui";
}
bodyStyle()

var external = () => {
  var book = 222222
  function internal () {
    return book.toFixed(2)
  }

  return internal
}

const teste = external();
// console.log(teste())


const safeArea = (secret: string)  => ({
  getSecret: () => secret
})

const privateUserData = "Dado Privado"
const obj = safeArea(privateUserData)

console.log(obj.getSecret())
console.log(typeof obj)