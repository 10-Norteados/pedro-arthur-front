import axios from "axios";
// import https from "https"
const https = require('https')
const api = axios.create({
    baseURL: "http://localhost:3030/guest/",
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})

export default api