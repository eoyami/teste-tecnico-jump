import React from 'react'
import { FaHome } from "react-icons/fa";
import Image from 'next/image'
interface Params {
    params: {
      id: string;
    };
  }
  
  async function getProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) return null;
    return res.json();
  }

const page = async ({params}: Params) => {
  const product = await getProduct(params.id);
  const price = product.price;
  const pricePlus100 = price + 100;
  const discount = (price + 100) - price;
  return (
    <div className='container flex-col justify-center items-center mx-auto p-4 h-full'>
            <div className='flex flex-col items-center h-full md:items-start bg-white rounded-md p-4 my-2 justify-start'>
                <div>
                    <a href="/">
                        <div className='flex items-center p-1 text-lg font-bold text-center bg-blue-500 text-white rounded-md'>
                            <FaHome/>
                            <p className='ml-2'>Voltar a Home</p>
                        </div>
                    </a>
                </div>
                <div id='product-container' className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='flex flex-col items-center justify-center w-full md:w-2/3 relative'>
                        <Image className='w-full md:max-w-80 md:max-h-90' src={product.image} alt={product.title} width={200} height={100} />
                    </div>
                    <div className='flex flex-col justify-end w-full md:w-1/3'>
                        <h1 className='text-lg font-bold text-black my-3'>{product.title.length > 20 ? product.title.slice(0, 50) + '...' : product.title}</h1>
                        
                        <div className='flex flex-col mt-3'>
                            <div className='flex flex-row gap-2 items-center'>
                                <p className='text-lg text-gray-500'><del>{pricePlus100.toFixed(2)}</del></p>
                                <p className='text-lg font-bold text-black bg-green-600 rounded-md p-1 text-white'>{`R$${discount.toFixed(0)} de desconto!`}</p>
                            </div>
                            <p className='text-2xl font-bold text-black my-3'>R${price.toFixed(2)}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                        <button className='text-lg text-white bg-green-500 rounded-md p-2 hover:bg-green-600'>Comprar</button>
                        <button className='text-lg text-white bg-gray-500 rounded-md p-2 hover:bg-gray-600'>Adicionar ao carrinho</button>
                        </div>
                        <div className='flex flex-col'>
                            <div className="text-black font-bold mt-3">Descrição do produto:</div>
                            <p className='text-lg text-black'>{product.description.length > 200 ? product.description.slice(0, 200) + '...' : product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default page