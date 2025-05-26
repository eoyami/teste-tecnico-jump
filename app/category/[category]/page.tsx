import CategoryWrapper from '@/app/components/CategoryWrapper';
import CheckCategory from '@/app/components/CheckCategory';
import categoryMap from '@/app/utils/categoryMap';

type PageProps = {
  params: {
    category: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const { category } = await params;
  const normalizedCategory = categoryMap[category] || category;
  return (
    <div className='flex flex-wrap justify-start container mt-1'>
        <div className='flex flex-wrap justify-between bg-white p-2 rounded-md h-full w-full'>
          <div className='bg-white w-full'>
            <h2 className='text-xl text-black font-bold'>Categoria(s): {normalizedCategory === 'all' ? 'Todas' : normalizedCategory}</h2>
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

export default Page


// 👇 Adicione isto no mesmo arquivo
export async function generateStaticParams() {
  return [
    { category: 'all' },
    { category: 'mens-clothing' },
    { category: 'womens-clothing' },
    { category: 'electronics' },
    { category: 'jewelery' },
  ];
}