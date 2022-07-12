import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: "https://api.thecatapi.com/v1/",
    headers: {
        "Content-type": "application/json",
        "x-api-key": "619d6cc8-d243-4fa0-8f7b-a8c8719e373b",
    },
});

export default apiClient;