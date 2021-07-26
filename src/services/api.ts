import axios from "axios";

const api = axios.create({
    baseURL: "https://baseprodutos.netlify.app/"
})

export default api;
export {};
