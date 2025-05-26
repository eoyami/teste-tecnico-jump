'use client'
import { usePathname, useSearchParams, useRouter} from 'next/navigation'
import { useState } from 'react'

const CheckCategory = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const [selectedCategory, setSelectedCategory] = useState<string[]>(
        searchParams.get('categories')?.split(',') || []
    )
    const toggleCategory = (category: string) => {
        let updatedCategories = [...selectedCategory]
        if(updatedCategories.includes(category)){
            updatedCategories = updatedCategories.filter(c => c !== category)
        }else{
            updatedCategories.push(category)
        }
        setSelectedCategory(updatedCategories)
        const params = new URLSearchParams(searchParams)
        params.set('categories', updatedCategories.join(','))
        router.push(`${pathname}?${params.toString()}`)
    }
  return (
    <>
    {pathname === '/category/all' ? (
        <div className='hidden max-h-max md:flex md:flex-col md:gap-2 border-gray border-2 md:p-2'>
        <div className='text-sm text-black'>Escolha uma categoria abaixo:</div>
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
            <input type="checkbox" onChange={() => toggleCategory('all')} />
            <label className='text-sm text-black'>Todos</label>  
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" onChange={() => toggleCategory('men\'s clothing')} />
            <label className='text-sm text-black'>Roupas Masculinas</label>
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" onChange={() => toggleCategory('women\'s clothing')} />
            <label className='text-sm text-black'>Roupas Femininas</label>
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" onChange={() => toggleCategory('electronics')} />
            <label className='text-sm text-black'>Eletrônicos</label>
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" onChange={() => toggleCategory('jewelery')} />
            <label className='text-sm text-black'>Jóias</label>
            </div>
        </div>
    </div>
    ) : null}
    </>
  )
}
export default CheckCategory