
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
        apikey: process.env.VUE_APP_MARVEL_API_KEY,
      },
})

export default api;