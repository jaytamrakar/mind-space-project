import React from 'react'

const spinner = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className="border-gray-300 h-20 w-20  animate-spin rounded-full border-8 border-t-blue-600" 
      > 
      </div>
      <h1 className='text-xl m-10 animate-ping ' >Loading...</h1>
    </div>
  )
}

export default spinner
