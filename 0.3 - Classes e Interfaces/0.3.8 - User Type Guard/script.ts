// const fetchedProduct = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const json = await res.json();
//   console.log(json);
//   handleProduct(json);
// };
// fetchedProduct();

// function isString(value: unknown): value is string {
//   return typeof value === "string";
// }

// function handleProduct(data: unknown) {
//   if (data instanceof Array) {
//     console.log("É uma instância de Array: ", data);
//   }
//   if (Array.isArray(data)) {
//     console.log("É um Array verificado pelo método: ", data);
//   }
// }

//  Desafio 1

interface Email {
  from: string;
  subject: string;
  body: string;
}

interface SMS {
  from: string;
  contact: string;
  message: string;
}
interface PushNotification {
  from: string;
  level: string;
  message: string;
}

function isEmail(notification: unknown): notification is Email {
  return (
    typeof notification === "object" &&
    notification !== null &&
    "subject" in notification &&
    "body" in notification
  );
}

function isPushNotification(
  notification: unknown
): notification is PushNotification {
  return (
    typeof notification === "object" &&
    notification !== null &&
    "level" in notification
  );
}

function isSMS(notification: unknown): notification is SMS {
  return (
    typeof notification === "object" &&
    notification !== null &&
    "contact" in notification
  );
}

function sendNotification(data: unknown) {
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

// sendNotification({
//   from: "teste@email.com",
//   subject: "Spam",
//   body: "Don't Read this.",
// });
// sendNotification({
//   from: "Lucas",
//   level: "Low",
//   message: "Hello",
// });
// sendNotification({
//   contact: "T-System",
//   message: "You get a $400 Bonus to use in our marketplace, shop now.",
// });

// Desafio 3

interface SuccessReponse {
  name: string;
  weight: number;
}

interface ErrorResponse {
  message: string;
}

function isPokemon(data: unknown): data is SuccessReponse {
  return (
    typeof data === "object" &&
    data !== null &&
    "name" in data &&
    "weight" in data
  );
}

function isApiError(data: unknown): data is ErrorResponse {
  return typeof data === "object" && data !== null && "message" in data;
}

async function fetchPokeApi(id: number | string) {
  try {
    let pokeApi = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(pokeApi);
    console.log(res);
    if (!res.ok) {
      let errorMessage: unknown = {
        message: "Pokemon não encontrado ou erro na API.",
      };
      if (isApiError(errorMessage)) {
        console.error("Erro validado: ", errorMessage.message);
      }
      return;
    }

    const data: unknown = await res.json();

    if (isPokemon(data)) {
      console.log(
        `✅ Sucesso: O nome é ${data.name.toUpperCase()} e pesa ${
          data.weight
        }kg`
      );
    } else {
      console.error("❌ Os dados recebidos não seguem o formato esperado.");
    }
  } catch (err) {
    console.error("Falha crítica na requisição");
  }
}

// fetchPokeApi(-1);

// Desafio com Generics
interface UserSession {
  token: string;
  expires: number;
}

// TODO: Implemente o type guard genérico
function isValidData<T>(data: unknown, requiredKeys: (keyof T)[]): data is T {
  return (
    typeof data === "object" &&
    data !== null &&
    requiredKeys.every(key => (data as any)[key] !== undefined)
  );
}

function getFromStorage<T>(key: string, requiredKeys: (keyof T)[]): T | null {
  const rawData = localStorage.getItem(key);
  if (!rawData) return null;

  try {
    const parsedData: unknown = JSON.parse(rawData);

    if (isValidData<T>(parsedData, requiredKeys)) {
      return parsedData;
    }
  } catch {
    return null;
  }
  return null;
}

// Teste

// localStorage.setItem(
//   "session",
//   JSON.stringify({ token: "abc-123", expires: 3600 })
// );

// const session = getFromStorage<UserSession>("session", ["token", "expires"]);

// if (session) {
//   console.log("Token recuperado com segurança:", session.token);
// } else {
//   console.error("Dados corrompidos ou inválidos no storage.");
// }

// Exercício
interface Curso {
  nome: string;
  horas: number;
  tags: string[];
}

function isCursos(data: unknown): data is Curso {
  return (
    typeof data === "object" &&
    data !== null &&
    "nome" in data &&
    "horas" in data &&
    Array.isArray((data as any).tags)
  );
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
