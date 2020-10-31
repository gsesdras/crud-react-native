import api from "./api";

interface SignInResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

interface SignUpResponse {
  name: string;
  email: string;
}

export function signIn(
  email: string,
  password: string
): Promise<SignInResponse> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/auth", { email, password });

      resolve({
        token: response.data.token,
        user: {
          id: response.data.id,
          name: response.data.name,
          email,
        },
      });
    } catch (error) {
      reject({ error: "E-mail e/ou seja inválidos!" });
    }
  });
}
export function signUp(
  name: string,
  email: string,
  password: string
): Promise<SignUpResponse> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/users", { name, email, password });

      resolve({
        name: response.data.name,
        email,
      });
    } catch (error) {
      reject({
        error: "E-mail já existe e/ou você não preencheu algum campo!",
      });
    }
  });
}
