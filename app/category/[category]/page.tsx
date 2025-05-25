import CategoryWrapper from '@/app/components/CategoryWrapper';


type ParamsProps = {
  params: {
    category: string
  }
}


const page = ({params}: ParamsProps) => {

  return (
    <div className='flex flex-wrap justify-start container mt-1'>
        <div className='flex flex-wrap container justify-between bg-white p-2 rounded-md h-full'>
          <div className='bg-white w-full'>
            <h2 className='text-xl text-black font-bold'>Categorias: </h2>
          </div>
            <div className='flex container justify-center bg-white rounded-md gap-1 w-full h-full'>
              <div className='flex container w-full bg-white justify-center rounded-md gap-1'>
                <div className='grid grid-cols-0 sm:grid-cols-0 md:grid-cols-1'>
                  <div className='hidden md:flex border-gray border-2'>
                    AQUI FICARÁ AS CHECKBOX
                  </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <CategoryWrapper category={params.category} />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default page