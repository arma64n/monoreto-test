import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2/'
})

export default api
