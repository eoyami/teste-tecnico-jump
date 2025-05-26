import React from 'react'
import Image from 'next/image'
import heroSection from '@/public/hero-section.webp'

const HeroSection = () => {
  return (
    <div className='relative flex w-full bg-white h-60 rounded-md rounded-md'>
      <Image src={heroSection.src} alt="Hero Section" fill className=' w-full h-full object-cover rounded-md' />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md'></div>
      <div className='relative flex w-full h-full mx-5'>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-white text-2xl font-bold text-center'>Compre com segurança e confiabilidade</h1>
        <p className='text-white text-md text-center'> As melhores marcas de roupas e acessórios do Brasil</p>
      </div>
      </div>
    </div>
  )
}

export default HeroSection