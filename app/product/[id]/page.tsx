import React from 'react'
import Image from 'next/image'

  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  async function getProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
        throw new Error('deu erro!');
    }
    return res.json();
  }

  type Params = {
    params: {
      id: string;
    }
  }
  const page = async ({params}: Params) => {
    const id = params.id as string;
    const product: Product = await getProduct(id);
    const price = product.price;
    const pricePlus100 = price + 100;
    const discount = (price + 100) - price;

  return (
    <div className='container flex-col justify-center items-center mx-auto'>
            <div key={product.id} className='flex flex-col md:items-start bg-white rounded-md p-4 my-2 justify-center'>
                <div id='product-container' className='flex flex-col w-full md:flex-row items-center justify-between mt-2 md:mt-1'>
                    <div className='flex flex-col items-center justify-center w-full md:w-2/3 relative'>
                        <Image className='md:max-w-80 md:max-h-90' src={product.image} alt={product.title} width={200} height={100} />
                    </div>
                    <div className='flex flex-col justify-end w-full md:w-1/3'>
                        <h1 className='text-2xl font-bold text-black my-2'>{product.title.length > 20 ? product.title.slice(0, 50) + '...' : product.title}</h1>
                        <h2 className='text-md font-bold text-black'>{product.category.toUpperCase().slice(0, 1) + product.category.slice(1, product.category.length)}</h2>
                        <div className='flex flex-col mt-3'>
                            <div className='flex flex-row gap-2 items-center'>
                                <p className='text-lg text-gray-500'><del>{`R$${pricePlus100.toFixed(2).replace('.', ',')}`}</del></p>
                                <p className='text-lg font-bold text-black bg-green-600 rounded-md p-1 text-white'>{`R$${discount.toFixed(0).replace('.', ',')} de desconto!`}</p>
                            </div>
                            <p className='text-2xl font-bold text-black my-3'>R${price.toFixed(2).replace('.', ',')}</p>
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