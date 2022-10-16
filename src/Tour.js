import React from 'react'

const Tour = ({id, name, info, image, price}) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img class="w-full" src={image} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
        <p class="text-gray-700 text-base">
          {info}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 flex justify-center items-center">
        <button class="bg-transparent hover:bg-zinc-600 text-zinc-700 font-semibold hover:text-white py-2 px-4 border border-zinc-500 hover:border-transparent rounded">
        ${price}
        </button>
      </div>
    </div>
  )
}

export default Tour