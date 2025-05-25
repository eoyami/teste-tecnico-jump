import Products from './Products'
import type { Products as ProductType } from '../mockup/produtos'

interface Props {
  category: string
}

const ProductWrapper = async ({ category }: Props) => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  const filtered: ProductType[] = category === "all" ? data : data.filter((p: ProductType) => p.category === category)

  return (
    <Products products={filtered} />
  )
}

export default ProductWrapper