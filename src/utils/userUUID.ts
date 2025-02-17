import { v4 as uuidv4 } from 'uuid'

const USER_UUID_KEY = 'liteflixUserUUID'

export function getUserUUID(): string {
  let uuid = localStorage.getItem(USER_UUID_KEY)
  
  if (!uuid) {
    uuid = uuidv4()
    localStorage.setItem(USER_UUID_KEY, uuid)
  }
  
  return uuid
} 