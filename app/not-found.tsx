import React from 'react'

const NotFound = () => {
  return (
    <div>
        <div className='container flex justify-center items-center mt-10'>
            <h1 className='text-2xl font-bold text-red-600'>Página não encontrada</h1>
        </div>
        <div className='container flex justify-center items-center mt-5'>
            <p className='text-lg text-gray-500'>Desculpe, a página que você está procurando não existe.</p>
        </div>
    </div>
  )
}

export default NotFound