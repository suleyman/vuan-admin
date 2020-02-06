import axios from "axios"

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3001',
  timeout: 10000
})