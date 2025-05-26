'use client'
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import {useEffect, useRef, useState} from 'react'

type CarrouselProps = {
    children: React.ReactNode,
    title: string
}

const Carrousel = ({children, title}: CarrouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showArrows, setShowArrows] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const handleScroll = (direction: 'left' | 'right') => {
    if(!containerRef.current) return
    const scrollAmount = direction === 'left' ? -350 : 350
    containerRef.current.scrollBy({left: scrollAmount, behavior: 'smooth'})
    console.log(containerRef.current.scrollLeft)
  }

  const updateArrowsVisibility = () => {
    if(!containerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
  }

  useEffect(() => {
    const el = containerRef.current
    if(!el) return
    updateArrowsVisibility()
    el.addEventListener('scroll', updateArrowsVisibility)
    return () => {
      el.removeEventListener('scroll', updateArrowsVisibility)
    }
  }, [])

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
              {canScrollLeft && showArrows && (
                <div  className='absolute top-[43%] -left-3 text-white text-xl z-10 arrow-left'><button className='bg-black rounded-full' onClick={() => handleScroll('left')}><GoChevronLeft/></button></div>
              )}
              <div  className='flex w-full h-full bg-white rounded-md overflow-x-auto gap-1 scrollbar-hide items-centerr' ref={containerRef}>
                {children}
              </div>
              {canScrollRight && showArrows && (
                <div className='absolute top-[43%] -right-3 text-white text-xl z-10 arrow-right'><button className='bg-black rounded-full' onClick={() => handleScroll('right')}><GoChevronRight/></button></div>
              )}
            </div>
        </div>
    </div>
  )
}

export default Carrousel