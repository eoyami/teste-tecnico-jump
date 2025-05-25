import CategoryWrapper from '@/app/components/CategoryWrapper';
import CheckCategory from '@/app/components/CheckCategory';

interface ParamsProps {
  params: {
    category: string
  }
}

const page = ({params}: ParamsProps) => {
  const {category } = params;

  return (
    <div className='flex flex-wrap justify-start container mt-1'>
        <div className='flex flex-wrap justify-between bg-white p-2 rounded-md h-full w-full'>
          <div className='bg-white w-full'>
            <h2 className='text-xl text-black font-bold'>Categoria(s): {category === 'all' ? 'Todas' : category}</h2>
          </div>
            <div className='flex justify-center bg-white rounded-md gap-1 w-full h-full'>
              <div className='flex w-full bg-white justify-center md:justify-between rounded-md gap-0 md:gap-5'>
                <CheckCategory />
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3 w-full'>
                <CategoryWrapper category={category} />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default page