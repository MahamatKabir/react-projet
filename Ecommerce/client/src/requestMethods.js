import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =  
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWFkMzk0M2I1YjJkYTU2YWJiYmU1NiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzgwMzE1NTEsImV4cCI6MTYzODI5MDc1MX0.dNkKvLKLlNpGuVDo7DiN9XX84UHvkFum-Uz72N-e4NM"



export const publicRequest = axios.create({
    baseURL: BASE_URL, 
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});