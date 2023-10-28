import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/routes";

const sleep = (millis: number) =>
  new Promise((resolve) => setTimeout(resolve, millis));

axios.defaults.baseURL = "http://localhost:5155/api/";

axios.interceptors.response.use(
  async (response) => {
    await sleep(500);
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;

    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }

        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 404:
        toast.error(data.title);
        break;
      case 500:
        router.navigate("/server-error", { state: { error: data } });
        break;
      default:
        break;
    }

    return Promise.reject(error.response);
  }
);

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  patch: (url: string, body: {}) => axios.patch(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Products = {
  list: () => requests.get("/products"),
  details: (id: number) => requests.get(`/products/${id}`),
};

const TestErrors = {
  get400: () => requests.get("/buggy/bad-request"),
  get401: () => requests.get("/buggy/unauthorized"),
  get404: () => requests.get("/buggy/not-found"),
  get500: () => requests.get("/buggy/server-error"),
  get422: () => requests.get("/buggy/validation-error"),
};

const Cart = {};

const agent = {
  Products,
  TestErrors,
  Cart,
};

export default agent;
