import axios from "axios";
import api, { baseURL } from "./api"
import { initialState } from "../context/reducer";

export async function addQ(data) {
    let res = {
        types: data.types,
        Institute: data.institute,
        marks: data.marks,
        year: data.year
    }
    const response = await axios.post(`${baseURL}/addqualifications`, res, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function addJ(data) {
    const response = await axios.post(`${baseURL}/addjob`, data, api.Authheader)
    return response.data
}
export async function addW(data) {
    const response = await axios.post(`${baseURL}/addworksample`, data, api.Authheader)
    return response.data
}
export async function deleteQ(id) {
    const response = await axios.delete(`${baseURL}/deleteQ/${id}`, data,{ headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function deleteJ(data) {
    const response = await axios.delete(`${baseURL}/deleteJ/${data._id}`, data, api.Authheader)
    return response.data
}
export async function deleteW(data) {
    const response = await axios.delete(`${baseURL}/deleteW/${data._id}`, data, api.Authheader)
    return response.data
}