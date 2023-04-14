import axios from "axios";
import api, { baseURL } from "./api"
import { initialState } from "../context/reducer";

export async function addPost(data, body) {
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
export async function addbidder(postID, id) {
    let res = {
        id: id
    }
    const response = await axios.patch(`${baseURL}/Addbidder/${postID}`, res, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function selectbidder(postID, id) {
    let res = {
        id: id
    }
    const response = await axios.patch(`${baseURL}/Selectbidder/${postID}`, res, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function updatefile(id, file) {
    let res = {
        filename: file
    }
    const response = await axios.patch(`${baseURL}/updatefile/${id}`, res, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function updateWS(postID, id) {
    let res = {
        id: id
    }
    const response = await axios.patch(`${baseURL}/updateWS/${postID}`, res, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function reviewwork(postID, ans) {
    let res = {
        confirm: ans
    }
    const response = await axios.patch(`${baseURL}/Reviewwork/${postID}`, res, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
} export async function resubmit(postID) {

    const response = await axios.patch(`${baseURL}/resubmit/${postID}`, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function confirmnull(postID) {

    const response = await axios.patch(`${baseURL}/confirm/${postID}`, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function getpostsbyproviderID(id) {

    const response = await axios.get(`${baseURL}/postbyproviderID/${id}`, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function getpostbyselectedID(id) {

    const response = await axios.get(`${baseURL}/postbyselectedID/${id}`, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function getpostbyID(id) {

    const response = await axios.get(`${baseURL}/getpostBy/${id}`, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function getposts() {
    const response = await axios.get(`${baseURL}/getposts`, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}
export async function deletepostbyid(id) {

    const response = await axios.delete(`${baseURL}/deletePostBy/${id}`, { headers: { 'Content-Type': 'application/json', 'x-access-token': `${initialState.token}` } })
    return response.data
}