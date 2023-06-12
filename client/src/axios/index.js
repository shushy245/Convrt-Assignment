import axios from 'axios';

const baseURL = 'http://localhost:9000/api';

export const get = url => axios.get(`${baseURL}${url}`);

export const put = url => axios.put(`${baseURL}${url}`);