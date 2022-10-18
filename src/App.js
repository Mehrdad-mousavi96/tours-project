import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {

  const [loading, setLoading] = useState(true)
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
      console.log(error)
    }

  }

  const deleteHandler = (id) => {
    setTours(tours.filter((tour) => tour.id !== id))
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <div>
        <h1>There is no Tour</h1>
        <button className='border-2 border-zinc-600 text-zinc-900' onClick={fetchTours}>Refresh</button>
      </div>
    )
  }

  return (
    <div className='bg-gray-400'>
      <Tours tours={tours} onDelete={deleteHandler} />
    </div>
  )
}

export default App