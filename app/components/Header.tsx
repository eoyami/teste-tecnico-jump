'use client'

import React, { useState } from 'react'
import HeroSection from './HeroSection'
import { FaHome } from "react-icons/fa";
import { usePathname } from 'next/navigation';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()
  return (
    <>
    <div className="flex w-full my-1">
        <div className="flex items-center justify-between w-full">
        {
          pathname !== '/' ? (
            <div className='flex md:hidden justify-start'>
            <a href="/">
                <div className='flex items-center p-1 text-lg font-bold text-center bg-blue-500 text-white rounded-md'>
                    <FaHome/>
                </div>
            </a>
        </div>
          ) : null
        }
        <h1 className="text-3xl font-bold text-black"><a href="/">Loja da Jump</a></h1>
        <div className='flex md:hidden'>
            <p className='text-black'>Menu</p>
        </div>
        <nav className="hidden md:flex flex items-center justify-center">
          <ul className="flex gap-3">
            <a href="/">
                <li className="bg-blue-500 p-2 rounded-md hover:bg-blue-600">
                    Início
                </li>
            </a>
            <li onMouseOver={() => {setIsMenuOpen(true)}} onMouseOut={() => {setIsMenuOpen(false)}} className="inline-block relative bg-blue-500 p-2 z-10 rounded-md hover:bg-blue-600 hover:rounded-bl-none hover:rounded-br-none">
              <a href="/category/all">Categorias</a>
              {
                isMenuOpen && (
                  <div className="absolute top-10 left-0 p-2 rounded-md bg-blue-600 z-20 dropdown w-48 rounded-tl-none">
                <ul className="flex flex-col">
                <a href={`/category/mens-clothing`}>
                  <li className='rounded-tl rounded-tr hover:bg-white hover:text-black'>
                    Roupa Masculina
                  </li>
                  </a>
                  <a href={`/category/womens-clothing`}>
                    <li className='hover:bg-white hover:text-black'>
                        Roupa Feminina
                    </li>
                  </a>
                  <a href={`/category/electronics`}>
                    <li className='rounded-bl rounded-br hover:bg-white hover:text-black'>
                        Eletrônicos
                    </li>
                  </a>
                  <a href={`/category/jewelery`}>
                  <li className='rounded-bl rounded-br hover:bg-white hover:text-black'>
                    Bijuteria
                  </li>
                  </a>
                </ul>
              </div>
                )
              }
            </li>
            <li className="bg-blue-500 p-2 rounded-md hover:bg-blue-600">
              Promoções
            </li>
            <li className="bg-blue-500 p-2 rounded-md hover:bg-blue-600">
              Suporte
            </li>
          </ul>
        </nav>
        </div>
      </div>
      <HeroSection />
    </>
  )
}

export default Header