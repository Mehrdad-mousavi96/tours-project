import React, { useState } from 'react'

const Tour = ({id, name, info, image, price, onDelete}) => {

  const [readmore, setReadmore] = useState(false)

  return (
    <div  className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {readmore ? info : `${info.substring(0, 200)}`} ...
           <span onClick={() => setReadmore(!readmore)} className='text-blue-600 cursor-pointer'>
            {!readmore ? (<span>read more</span>) : (<span className='text-blue-600'>show less</span>)}
           </span>
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center items-center">
        <button onClick={() => onDelete(id)} className="bg-transparent hover:bg-zinc-600 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
        Not Interested
        </button>
      </div>
    </div>
  )
}

export default Tour