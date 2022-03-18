import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key)
        return item != null ? JSON.parse(item) : initialValue
      } catch (e) {
        console.error(e)
        return false
      }
    })
  
    const setLocalStorage = () => {
      try {
        window.localStorage.setItem(key, JSON.stringify(!storedValue))
        setStoredValue(!storedValue)
      } catch (e) {
        console.error(e)
      }
    }
    return [storedValue, setLocalStorage]
  }