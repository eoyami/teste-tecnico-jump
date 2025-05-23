import React from 'react'
import Image from 'next/image'

const Produts = async () => {
 const response = await fetch('https://fakestoreapi.com/products')
 const data = await response.json()
  return (
    <div className='flex flex-wrap justify-start container'>
        <div className='flex flex-wrap gap-2 container p-2'>
            {data.map((product: any) => (
            <div className='flex flex-col w-full md:max-w-60 md:max-h-80 items-center justify-center bg-white rounded-md p-4 my-1 justify-between' key={product.id}>
                    <h1 className='text-2xl font-bold text-black text-center'>{product.title.length > 20 ? product.title.slice(0, 20) : product.title}</h1>
                    <p className='text-lg font-bold text-black text-center bg-green-600 rounded-md px-1 text-white'>R$ {product.price.toFixed(2)}</p>
                    <div className='relative w-48 h-48'>
                      <Image className='object-contain' src={product.image} alt={product.title} fill/>
                    </div>
                    <a href={`/product/${product.id}`} className='text-lg text-blue-500 p-2 text-white bg-blue-500 rounded-md my-2'>Ver detalhes</a>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Produts