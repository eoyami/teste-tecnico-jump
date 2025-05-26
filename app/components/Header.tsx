'use client'
import { IoClose, IoMenu } from "react-icons/io5";
import React, { useState } from 'react'
import HeroSection from './HeroSection'
import { FaHome } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Link from "next/link";
const Header = () => {
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isMenuDropdownOpenMobile, setIsMenuDropdownOpenMobile] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const pathname = usePathname()

  const handleMenuMobile = () => {
    setIsMenuMobileOpen(prev => !prev)
    setIsMenuDropdownOpenMobile(false)
    setIsMenuDropdownOpen(false)
    const menuMobileDropdown = document.getElementById('menu-mobile-dropdown')
    const menuMobileDropdownMobile = document.getElementById('menu-mobile-dropdown-mobile')
    if (menuMobileDropdown) {
      menuMobileDropdown.classList.toggle('hidden')
    } else {
      return
    }
    if (menuMobileDropdownMobile) {
      menuMobileDropdownMobile.classList.toggle('hidden')
    } else {
      return
    }
  }
    return (
    <>
    <div className="flex w-full mb-1 bg-white rounded-b-md p-2">
        <div className="relative flex items-center justify-between w-full">
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
        <h1 className="text-3xl text-center font-bold text-black"><a href="/">Loja da Jump</a></h1>
        <div className='flex w-max justify-end md:hidden'>
            <button className="text-black text-3xl z-30" onClick={handleMenuMobile}>
                  {isMenuMobileOpen ? <IoClose /> : <IoMenu />}
                </button>
                {isMenuMobileOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white text-white flex flex-col gap-2 z-20 p-2 rounded-b-md animate-slide-down">
                    <Link href="/" className="text-black font-bold hover:text-blue-600 border-b-2 border-blue-600">Início</Link>
                    <div className="relative text-black font-bold border-b-2 border-blue-600 hover:text-blue-600">
              <Link href="#" onClick={() => {setIsMenuDropdownOpenMobile(!isMenuDropdownOpenMobile)}}>Categorias</Link>
              {
                isMenuDropdownOpenMobile && (
                      <div className="inline-block top-10 left-0 p-2 rounded-md bg-white z-20 dropdown w-48 rounded-tl-none w-full animate-slide-down">
                        <ul className="flex flex-col">
                        <Link onClick={() => {setIsMenuMobileOpen(false)}} href={`/category/mens-clothing`}>
                          <li className='text-black text-black font-bold border-b-2 border-blue-600 hover:text-blue-600 hover:underline'>
                            Roupa Masculina
                          </li>
                        </Link>
                        <Link onClick={() => {setIsMenuMobileOpen(false)}} href={`/category/womens-clothing`}>
                          <li className='text-black text-black font-bold border-b-2 border-blue-600 hover:text-blue-600 hover:underline'>
                              Roupa Feminina
                          </li>
                        </Link>
                        <Link onClick={() => {setIsMenuMobileOpen(false)}} href={`/category/electronics`}>
                          <li className='text-black text-black font-bold border-b-2 border-blue-600 hover:text-blue-600 hover:underline'>
                            Eletrônicos
                          </li>
                        </Link>
                        <Link onClick={() => {setIsMenuMobileOpen(false)}} href={`/category/jewelery`}>
                          <li className='text-black text-black font-bold'>
                            Bijuteria
                          </li>
                        </Link>
                        <Link onClick={() => {setIsMenuMobileOpen(false)}} href={`/category/all`}>
                          <li className='text-black text-black font-bold'>
                            Todas as categorias
                          </li>
                        </Link>
                      </ul>
                  </div>
                )
              }
            </div>
                    <a href="/" className="text-black font-bold border-b-2 border-blue-600 hover:text-blue-600 hover:underline">Promoções</a>
                    <a href="/contato" className="text-black font-bold border-b-2 border-blue-600 hover:text-blue-600 hover:underline">Contato</a>
                  </div>
                )}
        </div>
        <nav className="hidden md:flex flex items-center justify-center">
          <ul className="flex gap-3">
            <Link href="/">
                <li className="border-b-2 font-bold border-blue-500 p-2 z-10 hover:bg-blue-600 hover:rounded-bl-none hover:rounded-br-none text-black hover:text-white">
                    Início
                </li>
            </Link>
            <li onMouseOver={() => {setIsMenuDropdownOpen(true)}} onMouseOut={() => {setIsMenuDropdownOpen(false)}} className="inline-block relative border-b-2 border-blue-500 p-2 z-10 hover:bg-blue-600 hover:rounded-bl-none hover:rounded-br-none text-black hover:text-white">
              <div className="font-bold">Categorias</div>
              {
                isMenuDropdownOpen && (
                  <div className="absolute top-10 left-0 p-2 rounded-md bg-blue-600 z-20 dropdown w-48 rounded-tl-none">
                <ul className="flex flex-col">
                <Link href={`/category/mens-clothing`}>
                  <li className='font-bold rounded-tl rounded-tr hover:bg-white hover:text-black'>
                    Roupa Masculina
                  </li>
                </Link>
                <Link href={`/category/womens-clothing`}>
                  <li className='font-bold hover:bg-white hover:text-black'>
                    Roupa Feminina
                  </li>
                </Link>
                <Link href={`/category/electronics`}>
                  <li className='font-bold rounded-bl rounded-br hover:bg-white hover:text-black'>
                    Eletrônicos
                  </li>
                </Link>
                <Link href={`/category/jewelery`}>
                  <li className='font-bold rounded-bl rounded-br hover:bg-white hover:text-black'>
                    Bijuteria
                  </li>
                </Link>
                <Link href={`/category/all`}>
                  <li className='font-bold rounded-bl rounded-br hover:bg-white hover:text-black'>
                    Todas as categorias
                  </li>
                </Link>
                </ul>
              </div>
                )
              }
            </li>
            <Link href="/">
              <li className="font-bold border-b-2 border-blue-500 p-2 z-10 hover:bg-blue-600 hover:rounded-bl-none hover:rounded-br-none text-black hover:text-white">
                Promoções
              </li>
            </Link>
            <Link href="/contato">
              <li className="font-bold border-b-2 border-blue-500 p-2 z-10 hover:bg-blue-600 hover:rounded-bl-none hover:rounded-br-none text-black hover:text-white">
                Contato
              </li>
            </Link>
          </ul>
        </nav>
        </div>
      </div>
      <HeroSection />
    </>
  )
}

export default Header