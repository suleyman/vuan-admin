import axios from '@/api/http'

export const auth = (data: Object) => {
  return axios.post('/api/v1/postLogin', data)
}