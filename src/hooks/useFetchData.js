import { useState, useEffect } from 'react'

//custom hook
export function useFetchData(url) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      async function fetchData() {
        const response = await fetch(url, { method: 'GET', })
        const res = await response.json()
        setResult(res)
        setLoading(false)
      }
  
      fetchData()
    }, [])
  
    return { result, loading }
  }