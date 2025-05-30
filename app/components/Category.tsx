import React from 'react'
import Image from 'next/image'
import { Products } from '../mockup/produtos'
import Link from 'next/link'

interface Props {
    category: Products[]
}

const Category = ({category}: Props) => {
    return (
        <>
          {category.map((product: Products) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className='flex flex-col h-full items-center justify-center bg-white rounded-md p-2 gap-2 container border-2 border-gray'>
                  <div className='relative w-[9.8rem] h-[9rem] md:w-[11.99rem] md:h-[11.9rem]'>
                    <Image className='object-contain' src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                  </div>
                  <h1 className='text-md font-bold text-black text-center '>{product.title.length > 20 ? product.title.slice(0, 15) + "..." : product.title}</h1>
                  <div className='flex justify-center w-full'>
                  <del className='text-gray-500'><p className='text-sm md:text-lg font-bold text-center rounded-md px-1 text-gray-500'>R$ {product.price.toFixed(2)}</p></del>
                    <p className='text-sm md:text-lg font-bold text-black bg-green-600 rounded-md px-1 text-white'>R$ {product.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            ))}
        </>
  )
}

export default Category