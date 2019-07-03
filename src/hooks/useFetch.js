import { useState, useEffect } from 'react'

export default function useFetch() {
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [endPoint] = useState('/form')

  useEffect(
    function() {
      async function fetchData() {
        setLoading(true)
        const data = await fetch(endPoint)
        const json = await data.json()
        setLoading(false)
        setState(json)
      }
      fetchData()
    },
    [endPoint]
  )

  return [state, loading]
}
