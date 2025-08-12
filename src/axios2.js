import axios from 'axios';
const userApi2 = axios.create({
  baseURL: 'https://symphony-dvnx.onrender.com/student'
});

export default userApi2