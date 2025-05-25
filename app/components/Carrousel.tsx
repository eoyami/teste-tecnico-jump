'use client'
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import {useState} from 'react'

type CarrouselProps = {
    children: React.ReactNode,
    title: string
}

const Carrousel = ({children, title}: CarrouselProps) => {
  const [showArrows, setShowArrows] = useState(false)
  return (
    <div className='flex flex-wrap justify-start container mt-1'>
        <div className='flex flex-col container justify-between bg-white p-2 rounded-md'>
          <div className='bg-white w-full'>
            <h2 className='text-xl text-black font-bold'>{title}</h2>
          </div>
            <div onMouseEnter={() => {
                setShowArrows(true)
                }} onMouseLeave={() => {
                    setShowArrows(false)
                }} className='relative flex w-full justify-center bg-white rounded-md gap-1'>
              {showArrows && (
                <div  className='absolute top-[43%] -left-3 text-white text-xl z-10 arrow-left'><button className='bg-black rounded-full'><GoChevronLeft/></button></div>
              )}
              <div  className='flex w-full h-full bg-white rounded-md overflow-x-auto gap-1 scrollbar-hide items-center'>
                {children}
              </div>
              {showArrows && (
                <div  className='absolute top-[43%] -right-3 text-white text-xl z-10 arrow-right'><button className='bg-black rounded-full'><GoChevronRight/></button></div>
              )}
            </div>
        </div>
    </div>
  )
}

export default Carrousel