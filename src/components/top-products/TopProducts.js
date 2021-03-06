import React, { useContext } from 'react'

import ProductsContext from '../../context/productsContext'
import Card from '../Card'

const TopProducts = () => {
  const { products } = useContext(ProductsContext)

  return (
    <main className="px-8 lg:px-16 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
            Productos Destacados <span role="img" aria-label="corazón">💚</span>
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {
              products['frutas'].map(product => <Card key={product.id} {...product} />)
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default TopProducts
