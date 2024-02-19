/* eslint-disable import/no-anonymous-default-export 
https://gosolo-api.onrender.com/api/auth 
https://gosolo-api2.onrender.com/api/auth
 */

import { initialState } from "../context/reducer";



export const baseURL = "https://gosolo-api.onrender.com";
export const API_URL = "https://gosolo-api.onrender.com";
export const header = {
    'Content-Type': 'application/json'
    }
export const Authheader = {
        'Content-Type': 'application/json',
        'x-access-token': `${initialState.token}`
        }

export default {baseURL, API_URL, header,Authheader};
