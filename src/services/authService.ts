import axios from '@/libs/axios'

export const auth = (data: Object) => {
  axios.post('/api/v1/postLogin', data)
  .then((response) => {
    return response
  })
  .catch((error) => {
    return error
  })
}