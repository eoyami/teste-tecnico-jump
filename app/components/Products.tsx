import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import data from '@/app/mockup/produtos'

interface Section {
  title: string
}

const Products = ({title}: Section) => {
//  const response = await fetch('https://fakestoreapi.com/products')
//  const data = await response.json()

  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)

  const updateScrollState = () => {
    const el = scrollRef.current;
    if(!el) return
    setCanScrollLeft(el.scrollLeft > 0)
  }

  useEffect(() => {
    const el = scrollRef.current
    if(!el) return
    el.addEventListener("scroll", updateScrollState)
    updateScrollState()

    return () => {
      el.removeEventListener("scroll", updateScrollState)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if(scrollRef.current){
      const scrollAmount = 350
      scrollRef.current?.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth"
      })
    }
    console.log(scrollRef.current?.scrollLeft)
  }

  const produtos = data
  return (
    <div className='flex flex-wrap justify-start container mt-1'>
        <div className='flex flex-col container justify-between bg-white p-2 rounded-md'>
          <div className='bg-white p-2 w-full'>
            <h2 className='text-xl text-black font-bold'>{title}</h2>
          </div>
            <div className='flex container justify-center bg-white rounded-md gap-1 w-full h-full carrousel'>
              {scrollRef.current ? (
                scrollRef.current?.scrollLeft! >= 1 ? (
                  <div onClick={() => scroll("left")} className='arrow-right z-10'><button>{`<`}</button></div>
                ): null
              ): null}
              <div ref={scrollRef} className='flex container justify-between bg-white rounded-md overflow-x-auto gap-1 scrollbar-hide'>
                {produtos.map((product: any) => (
                <div className='flex flex-col  items-center justify-center bg-white rounded-md p-2 my-1 justify-between gap-2 container border-2 border-gray' key={product.id}>
                        <h1 className='text-xl font-bold text-black text-center'>{product.title.length > 20 ? product.title.slice(0, 20) : product.title}</h1>
                        <div className='relative w-[9.4rem] h-[9.4rem] md:w-[11.99rem] md:h-[11.9rem]'>
                          <Image className='object-contain' src={product.image} alt={product.title} fill/>
                        </div>
                        <div className='flex justify-center w-full'>
                        <del className='text-gray-500'><p className='text-lg font-bold text-center rounded-md px-1 text-gray-500'>R$ {product.price.toFixed(2)}</p></del>
                          <p className='text-lg font-bold text-black text-center bg-green-600 rounded-md px-1 text-white'>R$ {product.price.toFixed(2)}</p>
                        </div>
                        <a href={`/product/${product.id}`} className='text-lg text-blue-500 p-2 text-white bg-blue-500 rounded-md w-full text-center hover:bg-blue-600'>Ver detalhes</a>
                </div>
                ))}
                
              </div>
              <div onClick={() => scroll("right")} className='arrow-right'><button>{`>`}</button></div>
            </div>
        </div>
    </div>
  )
}

export default Products