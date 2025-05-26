'use client'

import Image from 'next/image'
import type { Products } from '../mockup/produtos';
import Link from 'next/link';
interface Props {
  products: Products[]
}

const Products = ({products}: Props) => {
  return (
    <>
      {products.map((product: any) => (
        <Link key={product.id} href={`/product/${product.id}`} className='flex flex-col w-full h-full items-center justify-center bg-white rounded-md p-2 gap-2 container border-2 border-gray'>
              <div className='relative w-[9.8rem] h-[9rem] md:w-[11.99rem] md:h-[11.9rem]'>
                <Image className='object-contain' src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </div>
              <h1 className='text-xl font-bold text-black text-center min-h-[56px] max-h-[56px]'>{product.title.length > 20 ? product.title.slice(0, 25) + "..." : product.title}</h1>
              <div className='flex justify-center w-full'>
              <del className='text-gray-500'><p className='text-sm md:text-lg font-bold text-center rounded-md px-1 text-gray-500'>R$ {product.price.toFixed(2).replace('.', ',')}</p></del>
                <p className='text-md md:text-lg font-bold text-black bg-green-600 rounded-md px-1 text-white'>R$ {product.price.toFixed(2).replace('.', ',')}</p>
              </div>
        </Link>
        ))}
    </>
  )
}

export default Products