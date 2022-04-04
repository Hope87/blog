import React, {useEffect, useState, FC} from 'react'
import Link from 'next/link'
import {getCategories} from '../services'
import {ICategories} from '../interfaces'

const Categories: FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([])

  useEffect(() => {
    getCategories().then(newCategories => setCategories(newCategories))
  }, [])
  
  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
      Categories
      </h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories