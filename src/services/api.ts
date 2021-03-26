import axios from 'axios';
import { API_URL, XRAPIDAPIKEY, XRAPIDAPIHOST } from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': XRAPIDAPIKEY,
    'x-rapidapi-host': XRAPIDAPIHOST,
    useQueryString: true,
  },
});

export default api;
