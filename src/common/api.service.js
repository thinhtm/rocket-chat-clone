import axios from 'axios'

import { BASE_URL } from './api.constants'
import TokenService from './token.service'

const APIService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

APIService.interceptors.request.use(config => {
  const token = TokenService.getToken()
  config.headers.Authorization = token ? `Bearer ${token}` : ''

  return config
})

export default APIService
