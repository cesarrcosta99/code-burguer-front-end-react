import axios from 'axios'

export const apiCodeBurguer = axios.create({
  baseURL: 'https://back-end-production-5511.up.railway.app/'
})

apiCodeBurguer.interceptors.request.use(config => {
  const userData = localStorage.getItem('codeBurguer:user')
  const response = userData && JSON.parse(userData).token

  config.headers.authorization = `Bearer ${response}`
  return config
})
