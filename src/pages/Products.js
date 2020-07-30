import React, { useCallback, useEffect } from 'react'
import debounce from 'just-debounce-it'

import Banner from '../components/Banner'
import Spinner from '../components/spinner'
import useProducts from '../hooks/useProducts'
import useNearScreen from '../hooks/useNearScreen'
import Card from '../components/Card'

const Category = ({ path, title }) => {
  const keyword = path.split('/')[1]
  const { loading, products, setPage } = useProducts({ keyword })
  const { isNearScreen, fromRef } = useNearScreen({ once: false })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 11), 200),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <main className="px-8 lg:px-16 py-6 bg-gray-100">
      <Banner title={title} />
      {
        loading
          ? <Spinner />
          : <>
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {
                products.map(product => <Card key={product.id} {...product} />)
              }
            </div>
            <div id="viewer" ref={fromRef}></div>
          </>
      }
    </main>
  )
}

export default Category
