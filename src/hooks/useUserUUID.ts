import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const USER_UUID_KEY = 'liteflixUserUUID'

export function useUserUUID() {
  useEffect(() => {
    if (!localStorage.getItem(USER_UUID_KEY)) {
      localStorage.setItem(USER_UUID_KEY, uuidv4())
    }
  }, [])
} 