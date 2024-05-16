import axios from "axios";

const baseUrl = "http://www.omdbapi.com";

const API_KEY = "d07af213";

const API = axios.create({
  baseURL: `${baseUrl}`,
  params: {
    apikey: API_KEY,
  },
});

const API_ROUTES = {
  searchById: (id: string) => `?i=${id}`,
};

export { API, API_ROUTES };
