import axios from 'axios'
import Cookies from 'js-cookie'

const USER_UUID_KEY = 'liteflix-user-uuid'

export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const userUUID = Cookies.get(USER_UUID_KEY)
  if (userUUID) {
    config.headers['user-uuid'] = userUUID
  }
  return config
}) 