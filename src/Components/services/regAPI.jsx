import axios from "axios";
import api, { baseURL } from "./api"


export async function checkemail(email) {
    const response = await axios.get(`${api.baseURL}/checkemail/${email}`)
    return response.data
}


export async function reguser(data) {
    const response = await axios.post(`${baseURL}/register`, data, api.header)
    return response.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { reguser };