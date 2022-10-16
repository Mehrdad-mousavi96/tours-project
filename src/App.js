import React, { useEffect, useState } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }

  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className='w-full h-screen'>
      <Tours tours={tours} />
    </div>
  )
}

export default App