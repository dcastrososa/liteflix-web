'use client'

import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie'

const USER_UUID_KEY = 'liteflix-user-uuid'

export function UserUUIDInitializer() {
  useEffect(() => {
    if (!Cookies.get(USER_UUID_KEY)) {
      Cookies.set(USER_UUID_KEY, uuidv4(), { expires: 365 })
    }
  }, [])

  return null
} 