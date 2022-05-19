import axios from "axios";
import { ENDPOINT } from '../constants/constants';

export const getQuote = async () => {
    const response = await axios.get(ENDPOINT)
    return response;
};
