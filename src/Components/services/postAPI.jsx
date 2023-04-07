import axios from "axios";
import api, { baseURL } from "./api"
import { initialState } from "../context/reducer";

export async function addPost(data,body) {
    let res = {
        title: data.title,
        category: data.category,
        body: body,
        price: data.price,
        currency: data.currency,
        location: data.location
    }
    const response = await axios.post(`${baseURL}/AddPost`, res, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}

export async function getpostsbyproviderID(id) {
   
    const response = await axios.get(`${baseURL}/postbyproviderID/${id}`, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function getpostbyID(id) {
   
    const response = await axios.get(`${baseURL}/getpostBy/${id}`, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function deletepostbyid(id) {
   
    const response = await axios.delete(`${baseURL}/deletePostBy/${id}`, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}