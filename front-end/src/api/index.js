import axios from 'axios'

const API = axios.create({
  baseURL: 'https://whatsapp-mern-back-end.herokuapp.com/api',
})

export default API
