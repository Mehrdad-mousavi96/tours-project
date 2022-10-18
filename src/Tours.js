import React from 'react'
import Tour from './Tour'

const Tours = ({tours, onDelete}) => {
  return (
    <section className='w-full flex flex-col py-8 justify-center items-center'>
      <h1 className='underline'>Our Tours</h1>
      <div>
        {
          tours.map((tour) => {
            return (
              <Tour onDelete={onDelete} key={tour.id} {...tour} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Tours