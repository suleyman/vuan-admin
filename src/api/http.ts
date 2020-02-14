import axios from "axios"
import store from "@/store"
import router from "@/router"

const instance =  axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3001',
  timeout: 10000
})

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      instance.defaults.headers.AuthorizationKey = null;
      store.dispatch('user/logout')
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default instance