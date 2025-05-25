'use client'
import { usePathname, useSearchParams, useRouter} from 'next/navigation'
import { Products } from '../mockup/produtos'

const CheckCategory = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if(value === 'all'){
            router.push(`/category/all`)
        }else{
            router.push(`/category/${value}`)
        }
  return (
    <>
    {pathname === '/category/all' ? (
        <div className='hidden md:flex md:flex-col md:gap-2 border-gray border-2 md:p-2'>
        <div className='text-sm text-black'>Escolha uma categoria abaixo:</div>
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
            <input type="checkbox" onChange={handleChange} />
            <label className='text-sm text-black'>Todos</label>  
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" onChange={handleChange} />
            <label className='text-sm text-black'>Roupas Masculinas</label>
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" onChange={handleChange} />
            <label className='text-sm text-black'>Roupas Femininas</label>
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" onChange={handleChange} />
            <label className='text-sm text-black'>Eletrônicos</label>
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" onChange={handleChange} />
            <label className='text-sm text-black'>Jóias</label>
            </div>
        </div>
    </div>
    ) : null}
    </>
  )
}
}
export default CheckCategory