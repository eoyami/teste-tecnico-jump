import CategoryWrapper from '@/app/components/CategoryWrapper';
import CheckCategory from '@/app/components/CheckCategory';
import categoryMap, { translatedCategoryMap } from '@/app/utils/categoryMap';
import React from 'react';

const page = async ({ params }: any) => {
  const { slug } = await params;
  const normalizedCategory = categoryMap[slug];
  if (!slug) {
    return <div className='container flex justify-center items-center mt-10 text-red-500'>Categoria não encontrada</div>;
  }
  if (!normalizedCategory) {
    return <div className='container flex justify-center items-center mt-10 text-red-500'>Categoria não encontrada</div>;
  }
  const translatedCategory = translatedCategoryMap[slug];
  if (!translatedCategory) {
    return <div className='container flex justify-center items-center mt-10 text-red-500'>Categoria não encontrada</div>;
  }
  
  return (
    <div className='flex flex-wrap justify-start container mt-1'>
        <div className='flex flex-wrap justify-between bg-white p-2 rounded-md h-full w-full'>
          <div className='bg-white w-full'>
            <h2 className='text-xl text-black font-bold'>Categoria(s): {translatedCategory}</h2>
          </div>
            <div className='flex justify-center bg-white rounded-md gap-1 w-full h-full'>
              <div className='flex w-full bg-white justify-center md:justify-between rounded-md gap-0 md:gap-5'>
                <CheckCategory />
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full'>
                <CategoryWrapper category={normalizedCategory} />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default page