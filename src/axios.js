import axios from 'axios';
const userApi = axios.create({
  baseURL: 'https://symphony-dvnx.onrender.com/data'
});

export default userApi