import React from 'react'
import { Products } from '../mockup/produtos'
import Category from './Category'
import categoryMap from '../utils/categoryMap'

interface Props {
    category: string,
}

  const CategoryWrapper = async ({category}: Props) => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data: Products[] = await response.json()
    const normalizedUrl = categoryMap[category] || category
    const categoryFilter: Products[] = normalizedUrl === "all" ? data : data.filter((p: Products)  => p.category === normalizedUrl)
  return (
    <Category category={categoryFilter} />
  )
}

export default CategoryWrapper