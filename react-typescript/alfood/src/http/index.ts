import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000/api/v2/'
})

export default http