import axios from "../axios.js";

const REACT_APP_SERVER_URL = "https://api-zingmp3-public-ten.vercel.app/api";

export const getHome = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/home',
            method: 'get',
            baseURL: process.env.REACT_APP_SERVER_URL // Use the base URL for Axios requests
        });
        resolve(response);
    } catch (error) {
        reject(error);
    }
});
