import axios from "axios";
import { ENDPOINT } from '../constants/constants';

const axiosConfig = axios.create({
    baseURL: ENDPOINT,
    timeout: 3000,
})

export const getQuote = async () => {
    const result = await axiosConfig.get()
    .then(response => response)
    .catch(error => error)
    return result;
};

