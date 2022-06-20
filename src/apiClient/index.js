import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://disease.sh'
})


export default apiClient