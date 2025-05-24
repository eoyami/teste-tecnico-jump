"use client"
import React from 'react'
import HeroSection from './HeroSection'

const Header = () => {
    function toggleMenu () {
        const menu = document.querySelector('.dropdown')
        if(!menu){
          console.log('.dropdown não encontrado')
          return
        }
        menu.classList.toggle('hidden')
      }

      function outMouseOver() {
        const menu = document.querySelector('.dropdown')
        if(!menu){
          console.log('.dropdown não encontrado')
          return
        }
        menu.classList.toggle('hidden')
      }
  return (
    <>
    <div className="flex w-full my-1">
        <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold text-black">Loja da Jump</h1>
        <div className='flex'>
            <p className='text-black'>Menu</p>
        </div>
        <nav className="hidden md:flex flex items-center justify-center">
          <ul className="flex gap-3">
            <li className="bg-blue-500 p-2 rounded-md hover:bg-blue-600">
              Início
            </li>
            <li onMouseOver={toggleMenu} onMouseOut={outMouseOver} className="inline-block relative bg-blue-500 p-2 z-10 rounded-md hover:bg-blue-600 hover:rounded-bl-none hover:rounded-br-none">
              Categorias
              <div className="hidden absolute top-10 left-0 p-2 rounded-md bg-blue-600 z-20 dropdown w-48 rounded-tl-none">
                <ul className="flex flex-col">
                  <li>
                    <a href="#">Roupa Masculina</a>
                  </li>
                  <li>
                    <a href="#">Roupa Feminina</a>
                  </li>
                  <li>
                    <a href="#">Roupa para Criança</a>
                  </li>
                </ul>
              </div>
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