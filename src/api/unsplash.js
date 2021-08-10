import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ija8uqZMJe0NP3qxP1fQcY_Qm6dAFw_tgKHHge1rSoc'
    }
})