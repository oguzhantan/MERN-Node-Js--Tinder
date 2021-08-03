import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tindebackend.herokuapp.com/'
});

export default instance;