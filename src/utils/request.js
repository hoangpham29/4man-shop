import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_GET_API,
});
export default request;
