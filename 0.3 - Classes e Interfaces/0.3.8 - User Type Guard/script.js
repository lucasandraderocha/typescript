// const fetchedProduct = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const json = await res.json();
//   console.log(json);
//   handleProduct(json);
// };
// fetchedProduct();
function isEmail(notification) {
    return (typeof notification === "object" &&
        notification !== null &&
        "subject" in notification &&
        "body" in notification);
}
function isPushNotification(notification) {
    return (typeof notification === "object" &&
        notification !== null &&
        "level" in notification);
}
function isSMS(notification) {
    return (typeof notification === "object" &&
        notification !== null &&
        "contact" in notification);
}
function sendNotification(data) {
    if (isEmail(data)) {
        return console.log("Notification → Email: \n", {
            subject: data.subject,
            body: data.body,
        });
    }
    if (isPushNotification(data)) {
        return console.log("Notification → Push: \n", {
            level: data.level,
            message: data.message,
        });
    }
    if (isSMS(data)) {
        return console.log("Notification → SMS: \n", {
            contact: data.contact,
            message: data.message,
        });
    }
    return console.log(data);
}
function isPokemon(data) {
    return (typeof data === "object" &&
        data !== null &&
        "name" in data &&
        "weight" in data);
}
function isApiError(data) {
    return typeof data === "object" && data !== null && "message" in data;
}
async function fetchPokeApi(id) {
    try {
        let pokeApi = `https://pokeapi.co/api/v2/pokemon/${id}`;
        let res = await fetch(pokeApi);
        console.log(res);
        if (!res.ok) {
            let errorMessage = {
                message: "Pokemon não encontrado ou erro na API.",
            };
            if (isApiError(errorMessage)) {
                console.error("Erro validado: ", errorMessage.message);
            }
            return;
        }
        const data = await res.json();
        if (isPokemon(data)) {
            console.log(`✅ Sucesso: O nome é ${data.name.toUpperCase()} e pesa ${data.weight}kg`);
        }
        else {
            console.error("❌ Os dados recebidos não seguem o formato esperado.");
        }
    }
    catch (err) {
        console.error("Falha crítica na requisição");
    }
}
// TODO: Implemente o type guard genérico
function isValidData(data, requiredKeys) {
    return (typeof data === "object" &&
        data !== null &&
        requiredKeys.every(key => data[key] !== undefined));
}
function getFromStorage(key, requiredKeys) {
    const rawData = localStorage.getItem(key);
    if (!rawData)
        return null;
    try {
        const parsedData = JSON.parse(rawData);
        if (isValidData(parsedData, requiredKeys)) {
            return parsedData;
        }
    }
    catch {
        return null;
    }
    return null;
}
function isCursos(data) {
    return (typeof data === "object" &&
        data !== null &&
        "nome" in data &&
        "horas" in data &&
        Array.isArray(data.tags));
}
async function fetchCursos() {
    let res = await fetch("https://api.origamid.dev/json/cursos.json");
    let json = await res.json();
    if (Array.isArray(json)) {
        json.filter(isCursos).forEach(item => {
            document.body.innerHTML += `
        <h1>${item.nome}</h1>
        <span>Carga Horária: ${item.horas}h</span>
        <ul>
        ${item.tags.join(" | ")}
        </ul>

        `;
        });
    }
}
fetchCursos();
export {};
//# sourceMappingURL=script.js.map